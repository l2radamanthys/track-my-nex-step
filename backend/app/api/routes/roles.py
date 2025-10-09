import uuid
from typing import Any

from fastapi import APIRouter, Depends, HTTPException, status
from app.api.deps import CurrentUser, SessionDep
from sqlmodel import func, select

from app.models.roles import Role, RolePublic, RolesPublic, RoleCreate, RoleUpdate
from app.crud import roles as role_crud

router = APIRouter(prefix="/roles", tags=["roles"])


@router.get("/", response_model=RolesPublic)
def read_roles(session: SessionDep, current_user: CurrentUser, skip: int = 0, limit: int = 100) -> Any:
    count_statement = select(func.count()).select_from(Role)
    count = session.exec(count_statement).one()
    roles = role_crud.get_roles(session=session, skip=skip, limit=limit)
    return RolesPublic(data=roles, count=count)


@router.get("/roles/{role_id}", response_model=RolesPublic)
def read_role(
    role_id: int,
    session: SessionDep,
    current_user: CurrentUser,
) -> Any:
    """
    Obtener un rol por ID con sus permisos. Requiere permiso 'roles:read'.
    """
    role = role_crud.get_role(session=session, role_id=role_id)
    if not role:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Rol no encontrado",
        )
    return role


@router.post("/", response_model=RolePublic)
def create_role(session: SessionDep, current_user: CurrentUser, role_in: RoleCreate) -> Any:
    """
    Create new role.
    """
    existing = role_crud.get_role_by_name(session=session, name=role_in.name)
    if existing:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Ya existe un rol con ese nombre",
        )
    role = role_crud.create_role(session=session, role_in=role_in)
    return role


@router.patch(
    "/roles/{role_id}",
    response_model=RolePublic,
)
def update_role(
    *,
    session: SessionDep,
    current_user: CurrentUser,
    role_id: int,
    role_in: RoleUpdate,
) -> Any:
    """
    Actualizar un rol. Requiere permiso 'roles:update'.
    """
    role = role_crud.get_role(session=session, role_id=role_id)
    if not role:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Rol no encontrado",
        )
    
    role = role_crud.update_role(session=session, db_role=role, role_in=role_in)
    return role

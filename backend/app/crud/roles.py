from sqlmodel import Session, select
from datetime import datetime

from app.models.roles import Role, RolePublic, RoleCreate, RoleUpdate


def create_role(*, session: Session, role_in: RoleCreate) -> Role:
    """Crear un nuevo rol"""
    db_role = Role.model_validate(role_in.model_dump())
    session.add(db_role)
    session.commit()
    session.refresh(db_role)
    return db_role


def get_role(*, session: Session, role_id: int) -> Role | None:
    """Obtener un rol por ID con sus permisos"""
    return session.get(Role, role_id)


def get_roles(
    *, session: Session, skip: int = 0, limit: int = 100
) -> list[Role]:
    """Obtener lista de roles"""
    statement = select(Role).offset(skip).limit(limit)
    return list(session.exec(statement).all())


def get_role_by_name(*, session: Session, name: str) -> Role | None:
    """Obtener un rol por nombre"""
    statement = select(Role).where(Role.name == name)
    return session.exec(statement).first()


# def update_role(
#     *, session: Session, db_role: Role, role_in: RoleUpdate
# ) -> Role:
#     """Actualizar un rol"""
#     role_data = role_in.model_dump(exclude_unset=True, exclude={"permission_ids"})
#     db_role.sqlmodel_update(role_data)
#     db_role.updated_at = datetime.utcnow()
    
#     # Actualizar permisos si fueron especificados
#     if role_in.permission_ids is not None:
#         # Eliminar permisos existentes
#         statement = select(RolePermissionLink).where(
#             RolePermissionLink.role_id == db_role.id
#         )
#         links = session.exec(statement).all()
#         for link in links:
#             session.delete(link)
        
#         # Agregar nuevos permisos
#         add_permissions_to_role(
#             session=session,
#             role_id=db_role.id,
#             permission_ids=role_in.permission_ids
#         )
    
#     session.add(db_role)
#     session.commit()
#     session.refresh(db_role)
#     return db_role


# def delete_role(*, session: Session, role_id: int) -> bool:
#     """Eliminar un rol"""
#     role = session.get(Role, role_id)
#     if not role:
#         return False
#     session.delete(role)
#     session.commit()
#     return True


# def add_permissions_to_role(
#     *, session: Session, role_id: int, permission_ids: list[int]
# ) -> None:
#     """Agregar permisos a un rol"""
#     for permission_id in permission_ids:
#         link = RolePermissionLink(role_id=role_id, permission_id=permission_id)
#         session.add(link)
#     session.commit()
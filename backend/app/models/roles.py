from sqlmodel import Field, Relationship, SQLModel
from typing import TYPE_CHECKING, Optional
from datetime import datetime


class RoleBase(SQLModel):
    name: str = Field(unique=True, index=True, max_length=100)
    description: str | None = Field(default=None, max_length=255)
    is_active: bool = Field(default=True)


class Role(RoleBase, table=True):
    id: int | None = Field(default=None, primary_key=True)
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)
    
    # Relaciones
    # users: list["User"] = Relationship(
    #     back_populates="roles",
    #     link_model="UserRoleLink"
    # )
    # permissions: list["Permission"] = Relationship(
    #     back_populates="roles",
    #     link_model="RolePermissionLink"
    # )


class RoleCreate(RoleBase):
    pass


class RoleUpdate(SQLModel):
    name: str | None = None
    description: str | None = None
    is_active: bool | None = None


class RolePublic(RoleBase):
    id: int
    created_at: datetime
    updated_at: datetime


# class RolePublicWithPermissions(RolePublic):
#     permissions: list[PermissionPublic] = []


class RolesPublic(SQLModel):
    data: list[RolePublic]
    count: int
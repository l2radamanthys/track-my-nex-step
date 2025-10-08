from sqlmodel import Field, Relationship, SQLModel
from typing import TYPE_CHECKING, Optional
from datetime import datetime


class PermissionBase(SQLModel):
    codename: str = Field(unique=True, index=True, max_length=100)
    name: str = Field(default=None, max_length=255)
    description: str | None = Field(default=None, max_length=255)
    is_active: bool = Field(default=True)
    resource: str = Field(max_length=100)  # ej: "users", "posts", "products"
    action: str = Field(max_length=50)  # ej: "create", "read", "update", "delete"


class Permission(PermissionBase, table=True):
    id: int | None = Field(default=None, primary_key=True)
    created_at: datetime = Field(default_factory=datetime.utcnow)
    
    # Relaciones
    # roles: list["Role"] = Relationship(
    #     back_populates="permissions",
    #     link_model=RolePermissionLink
    # )


class PermissionCreate(PermissionBase):
    pass


class PermissionUpdate(SQLModel):
    name: str | None = None
    description: str | None = None
    resource: str | None = None
    action: str | None = None


class PermissionPublic(PermissionBase):
    id: int
    created_at: datetime
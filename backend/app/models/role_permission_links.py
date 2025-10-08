from sqlmodel import Field, SQLModel


class RolePermissionLink(SQLModel, table=True):
    __tablename__ = "role_permission_link"
    
    role_id: int = Field(foreign_key="role.id", primary_key=True)
    permission_id: int = Field(foreign_key="permission.id", primary_key=True)
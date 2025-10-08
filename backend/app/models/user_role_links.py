import uuid
from sqlmodel import Field, Relationship, SQLModel
from pydantic import EmailStr
from typing import TYPE_CHECKING, Optional
from datetime import datetime


class UserRoleLink(SQLModel, table=True):
    __tablename__ = "user_role_link"
    
    user_id: uuid.UUID = Field(foreign_key="user.id", primary_key=True)
    role_id: int = Field(foreign_key="role.id", primary_key=True)
    assigned_at: datetime = Field(default_factory=datetime.utcnow)
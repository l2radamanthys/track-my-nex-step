from sqlmodel import Session, create_engine, select

from app.core.config import settings
from app.models.users import User, UserCreate
from app.models.items import Item
from app.crud import users as crud_users

engine = create_engine(str(settings.SQLALCHEMY_DATABASE_URI))


# make sure all SQLModel models are imported (app.models) before initializing DB
# otherwise, SQLModel might fail to initialize relationships properly
# for more details: https://github.com/fastapi/full-stack-fastapi-template/issues/28


def init_db(session: Session) -> None:
    # Tables should be created with Alembic migrations
    # But if you don't want to use migrations, create
    # the tables un-commenting the next lines
    # from sqlmodel import SQLModel

    # This works because the models are already imported and registered from app.models
    # SQLModel.metadata.create_all(engine)
    user = create_admin_user(session)


def create_admin_user(session: Session) -> User:
    print("Creating admin user")
    print(settings.FIRST_SUPERUSER)
    print(settings.FIRST_SUPERUSER_PASSWORD)

    user = session.exec(
        select(User).where(User.email == settings.FIRST_SUPERUSER)
    ).first()
    if not user:
        user_in = UserCreate(
            first_name="Admin",
            last_name="User",
            email=settings.FIRST_SUPERUSER,
            password=settings.FIRST_SUPERUSER_PASSWORD,
            is_superuser=True,
            is_active=True,
        )
        user = crud_users.create_user(session=session, user_create=user_in)
        print(f"Admin user '{settings.FIRST_SUPERUSER}' created")
    else:
        print(f"Admin user '{settings.FIRST_SUPERUSER}' already exists")  
    return user

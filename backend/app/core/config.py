from pydantic_settings import BaseSettings
import secrets


class Settings(BaseSettings):
    TITLE: str = "Takosync"
    API_PREFIX: str = "/api/v1"

    DB_HOST: str = "localhost"
    DB_PORT: int = 5432
    DB_NAME: str = "takosync"
    DB_USER: str = "postgres"
    DB_PASSWORD: str = "postgres"
    DATABASE_URL: str = f"postgresql+asyncpg://{DB_USER}:{
        DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"

    SECRET_KEY: str = secrets.token_urlsafe(32)

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"
        case_sensitive = True
    
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30

settings = Settings()

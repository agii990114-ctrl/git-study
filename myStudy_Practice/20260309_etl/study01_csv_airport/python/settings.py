from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
  mariadb_user: str = "root"
  mariadb_password: str = "1234"
  mariadb_host: str = "192.168.0.101"
  mariadb_database: str = ""
  mariadb_port: int = 3306

  mariadb_user2: str = "root"
  mariadb_password2: str = "1234"
  mariadb_host2: str = "192.168.0.101"
  mariadb_database2: str = ""
  mariadb_port2: int = 3307

  model_config = SettingsConfigDict(
    env_file=".env",
    env_file_encoding="utf-8",
  )

settings = Settings()

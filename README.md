# takosync
A fast, self-hostable file and data synchronization service


```txt
backend/
├── app/                      
│   ├── __init__.py          
│   ├── main.py              
│   ├── api/                 
│   │   ├── __init__.py
│   │   ├── routers/         # router files
│   │   │   ├── __init__.py
│   │   │   ├── links.py     
│   │   │   ├── notes.py     
│   │   │   ├── files.py     
│   │   │   └── auth.py      
│   │   └── deps.py          # Common API dependencies (e.g., get_current_user)
│   ├── crud/                # Create, Read, Update, Delete operations (database interactions)
│   │   ├── __init__.py
│   │   ├── crud_link.py
│   │   ├── crud_note.py
│   │   └── crud_file.py
│   │   └── base.py          
│   ├── models/              # Database models (SQLAlchemy models)
│   │   ├── __init__.py
│   │   ├── link.py
│   │   ├── note.py
│   │   ├── file.py
│   │   └── user.py
│   ├── schemas/             # Pydantic models (data shapes for API requests/responses)
│   │   ├── __init__.py
│   │   ├── link.py
│   │   ├── note.py
│   │   ├── file.py
│   │   ├── user.py
│   │   └── token.py         # Schemas for JWT tokens, etc.
│   ├── core/                # Core application logic, config, security
│   │   ├── __init__.py
│   │   ├── config.py        # Configuration loading (e.g., from environment variables)
│   │   └── security.py      # Password hashing, JWT handling, etc.
│   └── db/                  # Database session management, engine creation
│       ├── __init__.py
│       ├── session.py       # Database session setup/dependency
│       └── base.py          # Base model class (SQLAlchemy)
├── tests/                   # Tests package (using pytest and https://github.com/sanmatte/postie)
│   ├── __init__.py
│   ├── conftest.py          
│   ├── api/                 # Tests for API endpoints
│   │   └── ...
│   └── crud/                # Tests for CRUD operations
│       └── ...
├── .env                     # Environment variables
├── .gitignore
├── Dockerfile               
└── requirements.txt         # Project dependencies (or use pyproject.toml with Poetry/PDM)

```

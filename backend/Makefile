.PHONY: help install run dev test clean format lint check activate_env

DB_NOMBRE_DEL_DUMP= ~/Dropbox/Trabajo/TracMyNexStep/Backups/backup_`date +'%Y%m%d_%Hhs%Mmin'`.dump
DB_DUMP_MAS_RECIENTE=`ls -Art ~/Dropbox/Trabajo/TracMyNexStep/Backups/backup_*.dump  | tail -n 1`
NOMBRE_BD=track_my_nex_step


# Variables
PYTHON := uv run python
FASTAPI := uv run fastapi
APP_PATH := app/main.py
ALEMBIC := uv run alembic

# Colores
RESET := \033[0m
BOLD := \033[1m
GREEN := \033[32m
BLUE := \033[34m
CYAN := \033[36m
YELLOW := \033[33m
MAGENTA := \033[35m
RED := \033[31m
WHITE := \033[37m

# Default target
.DEFAULT_GOAL := help

help: ## Mostrar este mensaje de ayuda
	@echo "$(CYAN)════════════════════════════════════════════════════════════$(RESET)"
	@echo "$(BOLD)$(WHITE)  📋 Comandos disponibles$(RESET)"
	@echo "$(CYAN)════════════════════════════════════════════════════════════$(RESET)"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  $(BLUE)%-20s$(RESET) %s\n", $$1, $$2}'
	@echo "$(CYAN)════════════════════════════════════════════════════════════$(RESET)"

install: ## Instalar dependencias del proyecto
	@echo "$(YELLOW)📦 Instalando dependencias...$(RESET)"
	@uv sync
	@echo "$(GREEN)✅ Dependencias instaladas correctamente$(RESET)"

run: ## Ejecutar la aplicación en modo producción
	@echo "$(MAGENTA)🚀 Iniciando aplicación...$(RESET)"
	@$(FASTAPI) run $(APP_PATH)

dev: ## Ejecutar la aplicación en modo desarrollo (hot reload)
	@echo "$(CYAN)🔧 Iniciando aplicación en modo desarrollo...$(RESET)"
	@$(FASTAPI) dev $(APP_PATH)

test: ## Ejecutar tests
	@echo "$(BLUE)🧪 Ejecutando tests...$(RESET)"
	@$(PYTHON) -m pytest

format: ## Formatear código con ruff
	@echo "$(MAGENTA)🎨 Formateando código...$(RESET)"
	@uv run ruff format .
	@echo "$(GREEN)✅ Código formateado$(RESET)"

lint: ## Analizar código con ruff
	@echo "$(YELLOW)🔍 Analizando código...$(RESET)"
	@uv run ruff check .

check: lint test ## Ejecutar linting y tests
	@echo "$(GREEN)✅ Verificación completada$(RESET)"

clean: ## Limpiar archivos temporales y cache
	@echo "$(YELLOW)🧹 Limpiando archivos temporales...$(RESET)"
	@find . -type d -name "__pycache__" -exec rm -rf {} + 2>/dev/null || true
	@find . -type d -name ".pytest_cache" -exec rm -rf {} + 2>/dev/null || true
	@find . -type d -name ".ruff_cache" -exec rm -rf {} + 2>/dev/null || true
	@find . -type f -name "*.pyc" -delete 2>/dev/null || true
	@echo "$(GREEN)✅ Limpieza completada$(RESET)"

activate_env: ## Mostrar comando para activar el entorno virtual
	@echo "$(CYAN)💡 Para activar el entorno virtual, ejecuta:$(RESET)"
	@echo "$(YELLOW)   source .venv/bin/activate$(RESET)"

reset:
	@dropdb --if-exists ${NOMBRE_BD} -e; createdb ${NOMBRE_BD}
	@$(ALEMBIC) upgrade head
	@$(PYTHON) app/initial_data.py

revision:
	@$(ALEMBIC) revision --autogenerate -m "$(message)"

migrate:
	@$(ALEMBIC) upgrade head

realizar_backup:
	@echo "Creando el archivo ${DB_NOMBRE_DEL_DUMP}"
	@pg_dump -F c ${NOMBRE_BD} > ${DB_NOMBRE_DEL_DUMP}
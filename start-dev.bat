@echo off
REM Script para iniciar CIVYM Next.js en modo desarrollo

cd /d "%~dp0"

echo.
echo ========================================
echo   CIVYM - Iniciando servidor de desarrollo
echo ========================================
echo.

REM Verificar si node esta instalado
node -v >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js no esta instalado.
    echo Descargalo de: https://nodejs.org/
    pause
    exit /b
)

REM Verificar si pnpm esta instalado, si no, instalarlo
pnpm -v >nul 2>&1
if errorlevel 1 (
    echo Instalando pnpm...
    npm install -g pnpm
)

REM Instalar dependencias
echo Instalando dependencias...
call pnpm install

echo.
echo ========================================
echo   Servidor iniciado en http://localhost:3000
echo ========================================
echo.
echo Abre tu navegador y ve a: http://localhost:3000
echo.

REM Iniciar servidor
call pnpm dev

pause

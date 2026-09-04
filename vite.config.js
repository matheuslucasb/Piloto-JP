import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// No GitHub Actions, GITHUB_REPOSITORY já vem pronto como "usuario/repo".
// Uma "página de projeto" (usuario.github.io/repo) precisa de base "/repo/";
// rodando localmente ou publicando como "página de usuário"
// (usuario.github.io, sem subpasta) a base continua "/".
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1]
const isProjectPage = Boolean(process.env.GITHUB_ACTIONS) && repo && !repo.endsWith('.github.io')

export default defineConfig({
  plugins: [react()],
  base: isProjectPage ? `/${repo}/` : '/',
})

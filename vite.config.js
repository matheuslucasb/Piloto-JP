import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages serve este projeto em usuario.github.io/Piloto-JP/, não na
  // raiz do domínio — sem isso os assets (JS/CSS/imagens) seriam buscados a
  // partir de "/" e dariam 404 no site publicado.
  base: '/Piloto-JP/',
})

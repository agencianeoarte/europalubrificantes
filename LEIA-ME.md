# Europa Lubrificantes — Site estático

## Publicar no GitHub Pages
1. Extraia o ZIP no computador.
2. Envie `index.html`, a pasta `assets` e `.nojekyll` para a raiz do repositório. Não envie o próprio arquivo ZIP.
3. No GitHub: Settings → Pages → Build and deployment → Deploy from a branch.
4. Selecione a branch `main` e a pasta `/ (root)` e salve.
5. Aguarde a publicação. O GitHub mostrará o endereço do site.

Não precisa instalar pacotes ou executar compilação. Os caminhos são relativos e funcionam em repositórios do tipo usuario.github.io/repositorio/.

## Confirmar o WhatsApp antes de apresentar ao cliente
Só foi possível confirmar o telefone comercial (45) 3227-0715. A versão entregue usa esse número como destino de WhatsApp, mas não foi possível verificar se ele recebe mensagens. Confirme com a empresa e altere `whatsapp` em `assets/config.js`. Use 55 + DDD + número, somente dígitos. Todos os botões e o formulário usam essa configuração.

## Conteúdo
- `index.html`: conteúdo, endereço, contato e SEO.
- `assets/style.css`: layout responsivo, identidade vermelha e animações.
- `assets/script.js`: menu, formulário, galeria e animações.
- `assets/config.js`: número do WhatsApp e mensagem inicial.
- `assets/logo.svg` e `logo-white.svg`: assinatura tipográfica em vetor inspirada na escrita da fachada. Não é o arquivo oficial da marca; substitua se receber o original.
- `assets/images/fachada-instagram-2048.jpg`: foto da publicação original do Instagram, em 2048 × 1536 pixels, sem ampliação artificial nem recompressão. Substitui o print anterior no banner e na galeria. Fonte: https://www.instagram.com/p/DVBy8sdmQFs/
- `assets/images/motor.jpg` e `oficina.jpg`: fotografias de apoio da internet, ilustrativas; não representam o interior real da empresa.

As imagens, estilos, scripts e logo estão no pacote. O Google Maps e os links para WhatsApp e Instagram precisam de internet. O site não depende de fontes, bibliotecas de JavaScript ou fotos hospedadas externamente.

O formulário abre o WhatsApp com a mensagem preenchida e não guarda dados. O visitante precisa enviar a mensagem no próprio WhatsApp.

Os serviços descritos e contatos devem ser validados com o cliente. Não foram incluídos avaliações fictícias, depoimentos, marcas de parceiros ou formas de pagamento não confirmadas.

Animações: entrada suave das seções, aproximação discreta das fotos e efeitos nos botões. A preferência do dispositivo para reduzir movimento é respeitada.

## Créditos das imagens de apoio
Unsplash (arquivos locais incluídos):
https://images.unsplash.com/photo-1486262715619-67b85e0b08d3
https://images.unsplash.com/photo-1580273916550-e323be2ae537

Crédito de desenvolvimento: Agência Neo Arte — https://neoartepub.com.br

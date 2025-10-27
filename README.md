# Meu Portfólio de Projetos - [[@CM514380](https://linktr.ee/cm514380)]

<!-- ![Prévia do Projeto](link_para_uma_imagem_ou_gif_do_seu_projeto.gif) -->
> Este é o repositório do meu portfólio pessoal, um projeto com ênfase em back-end que demonstra habilidades em desenvolvimento web moderno com uma arquitetura monolítica. A aplicação renderiza as páginas principais usando o framework Django e, ao mesmo tempo, serve uma API RESTful com Django Rest Framework para carregar dinamicamente a lista de projetos.

---

### ✨ Funcionalidades Principais

* **Renderização Híbrida:** Páginas estáticas servidas diretamente pelo Django para performance e SEO.
* **API de Projetos:** Uma API RESTful (`/api/projects/`) que fornece os dados dos projetos em formato JSON.
* **Renderização Dinâmica:** Utilização de JavaScript puro (Vanilla JS) para buscar os projetos da API e inseri-los no DOM sem recarregar a página.
* **Paginação Assíncrona:** Navegue entre as páginas de projetos de forma fluida, com o JS buscando apenas os dados necessários.
* **Design Responsivo:** Interface construída com **Tailwind CSS**, incluindo um menu hambúrguer funcional feito com JavaScript puro.

---

### 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

* **Back-end:**
    * ![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
    * ![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white)
    * ![Django REST Framework](https://img.shields.io/badge/Django%20REST-A30000?style=for-the-badge&logo=django&logoColor=white)
* **Front-end:**
    * ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
    * ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
    * ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
* **Banco de Dados:**
    * ![SQLite](https://img.shields.io/badge/SQLite-07405E?style=flat&compact=true&logo=sqlite&logoColor=white)
* **Deploy:**
    * ![PythonAnywhere](https://img.shields.io/badge/PythonAnywhere-3670A0?style=flat&compact=true&logo=python&logoColor=white) 

---

### 🚀 Como Executar o Projeto Localmente

Siga os passos abaixo para rodar o projeto em sua máquina.

**Pré-requisitos:**
* Python 3.8+
* Pip
* Git

**Passo a passo:**

1.  **Clone o repositório:**
    ```bash
    git clone `https://github.com/carlosMarques2810/portfolio-django-drf.git`
    cd portfolio-django-drf
    ```
    
2.  **Crie e ative um ambiente virtual:**
    ```bash
    # Criar ambiente virtual
    python -m venv venv

    # Ativar (no Windows)
    .\venv\Scripts\activate

    # Ativar (no Linux/Mac)
    source venv/bin/activate
    ```

3.  **Instale as dependências:**
    O projeto utiliza um arquivo `requirements.txt` para gerenciar todas as bibliotecas Python. Para instalar, rode o comando:
    ```bash
    pip install -r requirements.txt
    ```

4.  **Aplique as migrações do banco de dados:**
    ```bash
    python manage.py migrate
    ```

5.  **Crie um superusuário (para acessar o Admin):**
    ```bash
    python manage.py createsuperuser
    ```

6.  **Execute o servidor de desenvolvimento:**
    ```bash
    python manage.py runserver
    ```

7.  Acesse `http://127.0.0.1:8000` em seu navegador para ver o projeto funcionando!

---

### 🌐 Endpoints da API

A API de projetos pode ser acessada através dos seguintes endpoints:

* `GET /api/projects/`: Retorna a lista paginada de todos os projetos.

**Exemplo de resposta de `GET /api/projects/`:**
```json
{
    "count": 1,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 1,
            "title": "Nome do Meu Projeto",
            "description": "Uma breve descrição do que este projeto faz.",
            "url_github": "https://github.com/project-1",
            "image": "http://127.0.0.1:8000/api/media/project/project-1.webp",
            "created_et": "2025-09-19 14:42:00.138322"
        }
    ]
}
```

---

### 👤 Contato

**[Carlos Marques]**

* [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/carlos-marques-a41721162/)
* [![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/carlosMarques2810)
* ✉️ carlosmarques.2810@gmail.com



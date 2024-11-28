// Função para gerar as opções de anos
function createYearOptions(StartYear, endYear) {
    const select = document.getElementById('yearSelect');
    for (let year = StartYear; year <= endYear; year++) {
        const option = document.createElement('option');
        option.value = year;
        option.text = year;
        select.appendChild(option);
    }
}

// Função para buscar o filme
async function buscarFilme() {
    const titulo = document.getElementById('input').value; // Obtém o valor do input
    const resposteDiv = document.getElementById('resposte'); // Obtém a div para mostrar a resposta
    
    try {
        const response = await fetch(`http://www.omdbapi.com/?t=${titulo}&apikey=b9a8ca09`); // Faz a chamada à API
        
        if (!response.ok) {
            throw new Error('Filme não encontrado');
        }
        
        const movieData = await response.json(); // Converte a resposta em JSON
        
        // Cria o card para exibir os dados do filme
        const movieCard = `
            <div style="border: 1px solid #ccc; border-radius: 8px; padding: 16px; margin: 16px; width: 200px; text-align: center;">
                <img src="${movieData.Poster}" alt="${movieData.Title}" style="width: 100%; border-radius: 8px;">
                <h2>${movieData.Title}</h2>
                <p>Ano: ${movieData.Year}</p>
            </div>
        `;
        
        resposteDiv.innerHTML = movieCard; // Exibe o card com os dados do filme
    } catch (error) {
        resposteDiv.innerHTML = `<h1>${error.message}</h1>`; // Exibe mensagem de erro
    }
}

// Adicionar o manipulador de eventos ao botão
document.getElementById('searchButton').addEventListener('click', buscarFilme);

// Chamar a função para criar as opções, ajustando os anos inicial e final
createYearOptions(1900, 2024);



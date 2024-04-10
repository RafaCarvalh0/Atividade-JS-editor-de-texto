document.addEventListener('DOMContentLoaded', function () {
    const prohibitedWords = document.getElementById('prohibitedWords');
    const synonyms = document.getElementById('synonyms');
    const originalText = document.getElementById('originalText');
    const options = document.getElementById('options');
    const resultLabel = document.getElementById('resultLabel');
    const changeTextBtn = document.getElementById('changeText');
    const clearFieldsBtn = document.getElementById('clearFields');
    const editedList = document.createElement('ul'); // Criando uma lista de edições

    changeTextBtn.addEventListener('click', function () {
        const text = originalText.value.trim();
        const prohibitedWordsArray = prohibitedWords.value.split(',').map(word => word.trim());
        const synonymsArray = synonyms.value.split(',').map(word => word.trim());
        const option = options.value;
        const edits = []; // Array para armazenar as edições

        if (text === '') {
            alert('Por favor, insira um texto original.');
            return;
        }

        if (option === 'replaceProhibited' && prohibitedWordsArray.length !== synonymsArray.length) {
            alert('As listas de palavras proibidas e sinônimos devem ter o mesmo tamanho.');
            return;
        }

        let newText = '';

        if (option === 'keepOriginal') {
            newText = text;
        } else if (option === 'removeProhibited') {
            newText = removeProhibitedWords(text, prohibitedWordsArray, edits);
        } else if (option === 'replaceProhibited') {
            newText = replaceProhibitedWords(text, prohibitedWordsArray, synonymsArray, edits);
        }

        // Adicionando edições à lista
        editedList.innerHTML = '';
        edits.forEach(edit => {
            const listItem = document.createElement('li');
            listItem.textContent = edit;
            editedList.appendChild(listItem);
        });

        const now = new Date().toLocaleString('pt-BR');
        resultLabel.innerHTML = `${now} <br>TEXTO EDITADO</br>${newText}`;
        resultLabel.appendChild(editedList); // Adicionando a lista de edições ao resultado
    });

    clearFieldsBtn.addEventListener('click', function () {
        prohibitedWords.value = '';
        synonyms.value = '';
        originalText.value = '';
        options.value = 'keepOriginal';
        resultLabel.innerHTML = '';
        editedList.innerHTML = ''; // Limpando a lista de edições ao limpar os campos
    });

    function removeProhibitedWords(text, prohibitedWordsArray, edits) {
        prohibitedWordsArray.forEach(word => {
            const regex = new RegExp('\\b' + word + '\\b', 'gi');
            text = text.replace(regex, match => {
                edits.push(`Palavra proibida removida: ${match}`);
                return `<span class="highlight">${match}</span>`;
            });
        });
        return text;
    }

    function replaceProhibitedWords(text, prohibitedWordsArray, synonymsArray, edits) {
        prohibitedWordsArray.forEach((word, index) => {
            const regex = new RegExp('\\b' + word + '\\b', 'gi');
            text = text.replace(regex, match => {
                edits.push(`Palavra proibida substituída por ${synonymsArray[index]}: ${match}`);
                return `<span class="substitute">${synonymsArray[index]}</span>`;
            });
        });
        return text;
    }

});

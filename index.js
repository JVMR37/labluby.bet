(
    function (win, doc, $) {
        'use strict';

        var $typeGameText = $('[data-js="typeGameText"]').get();

        var $lotofacilGameButton = $('[data-js="lotofacilButton"]').get();
        var $megaSenaGameButton = $('[data-js="megaSenaButton"]').get();
        var $quinaGameButton = $('[data-js="quinaButton"]').get();


        var $gameDescriptionText = $('[data-js="gameDescriptionText"]').get();


        var selectedGame = {
            "type": "",
            "description": "",
            "range": 0,
            "price": 0,
            "max-number": 0,
            "color": "",
            "min-cart-value": 0
        };

        var gameTypeList = [];

        var selectedNumbersElementList = [];

        var cart = [
            {
                "selectedNumber": [0, 2050, 1, 5],
                "typeGame": "LotoLoto",
                "price": 151.00
            }
        ]


        function initialize() {
            getGameTypes();
            changeTypeGame('Lotofácil');
            initEvents();
        }

        function initEvents() {
            $('[data-js="lotofacilButton"]').on('click', handleGameRadioButtonClick);
            $('[data-js="megaSenaButton"]').on('click', handleGameRadioButtonClick);
            $('[data-js="quinaButton"]').on('click', handleGameRadioButtonClick);
            $('[data-js="clearGameButton"]').on('click', handleClearGameButton);
            $('[data-js="completeGameButton"]').on('click', handleCompleteGameButton);
            // ? Apagar o elementos selecionados ao clicar no botão de completar ou
            // ? Terminar de preencher
        }

        function getGameTypes() {
            var ajax = new XMLHttpRequest();
            ajax.open('GET', './assets/games.json', false);

            ajax.send();

            var gamesJsonDecoded = JSON.parse(ajax.responseText);
            gameTypeList = gamesJsonDecoded.types;

            console.log(gameTypeList);
        }

        function handleGameRadioButtonClick(e) {
            e.preventDefault();
            console.log(e);
            var typeGameButton = e.target.getAttribute('data-js');
            var newTypeGame;

            switch (typeGameButton) {
                case 'lotofacilButton':
                    newTypeGame = "Lotofácil";
                    break;
                case 'megaSenaButton':
                    newTypeGame = "Mega-Sena";
                    break;
                case 'quinaButton':
                    newTypeGame = "Quina";
                    break;
            }

            changeTypeGame(newTypeGame);

        }

        function handleClearGameButton() {
            removeAllSelectedElements();
        }

        function handleCompleteGameButton(e) {
            randomlySelectNumbers();
        }

        function removeAllSelectedElements() {
            selectedNumbersElementList.forEach(
                function (numberElement) {
                    numberElement.classList.remove('lotofacilBackgroundColor');
                    numberElement.classList.remove('megaSenaBackgroundColor');
                    numberElement.classList.remove('quinaBackgroundColor');
                }
            );

            console.log(selectedNumbersElementList);

            selectedNumbersElementList = [];

        }

        function changeTypeGame(newTypeGame) {
            selectedGame = gameTypeList.filter(
                function (gameObject) {
                    return gameObject.type === newTypeGame
                }
            )[0];

            $gameDescriptionText.textContent = selectedGame.description;
            $typeGameText.textContent = selectedGame.type;

            selectedNumbersElementList = [];
            buildGridWithNumbers(selectedGame.range);


            switch (selectedGame.type) {
                case 'Lotofácil':
                    $lotofacilGameButton.classList.add('lotofacilButtonSelectedStyle');
                    $megaSenaGameButton.classList.remove('megaSenaButtonSelectedStyle');
                    $quinaGameButton.classList.remove('quinaButtonSelectedStyle');

                    break;
                case 'Mega-Sena':

                    $lotofacilGameButton.classList.remove('lotofacilButtonSelectedStyle');
                    $megaSenaGameButton.classList.add('megaSenaButtonSelectedStyle');
                    $quinaGameButton.classList.remove('quinaButtonSelectedStyle');

                    break;
                case 'Quina':

                    $lotofacilGameButton.classList.remove('lotofacilButtonSelectedStyle');
                    $megaSenaGameButton.classList.remove('megaSenaButtonSelectedStyle');
                    $quinaGameButton.classList.add('quinaButtonSelectedStyle');

                    break;
            }
        }

        function hasSelectedNumber(numberElement) {
            //TODO: Implemente isso aqui mano, e usa na funçaõ de selecionar e na ativação do botão
            //TOPDO: No botão ta pra chmar uma função especifica só de remover
        }

        function buildGridWithNumbers(numbersQuantity) {
            const numberOfGameArea = $('[data-js="numberOfGameArea"]').get();
            const $fragment = doc.createDocumentFragment();


            for (let index = 1; index <= numbersQuantity; index++) {
                var buttonNumber = doc.createElement('button');

                buttonNumber.classList.add('col-1', 'btn', 'numberCircleStyle', 'd-flex', 'justify-content-center');
                buttonNumber.textContent = ('0' + index).slice(-2);

                buttonNumber.addEventListener('click', handleClickNumberButton);

                $fragment.appendChild(buttonNumber);
            }

            numberOfGameArea.innerHTML = '';
            numberOfGameArea.appendChild($fragment);
        }

        function handleClickNumberButton(e) {
            e.preventDefault();
            var numberElement = e.target;

            if (selectedNumbersElementList.length === selectedGame["max-number"]) {
                win.alert("Você já selecionou o máximo de números permitidos para esse jogo !");
                return;
            }

            selectNumber(numberElement, true);
        }

        function selectNumber(numberElement, removeRepeated) {
            switch (selectedGame.type) {
                case 'Lotofácil':

                    if (numberElement.classList.contains('lotofacilBackgroundColor')) {
                        if (!removeRepeated) return
                        numberElement.classList.remove('lotofacilBackgroundColor');
                        selectedNumbersElementList.remove(numberElement);
                        return;
                    }

                    selectedNumbersElementList.push(numberElement);

                    numberElement.classList.add('lotofacilBackgroundColor');
                    break;
                case 'Mega-Sena':

                    if (numberElement.classList.contains('megaSenaBackgroundColor')) {
                        if (!removeRepeated) return

                        numberElement.classList.remove('megaSenaBackgroundColor');
                        var indexToRemove = selectedNumbersElementList.indexOf(numberElement);
                        selectedNumbersElementList.splice(indexToRemove, 1);

                        return;
                    }

                    selectedNumbersElementList.push(numberElement);
                    numberElement.classList.add('megaSenaBackgroundColor');


                    break;
                case 'Quina':
                    if (numberElement.classList.contains('quinaBackgroundColor')) {
                        if (!removeRepeated) return

                        numberElement.classList.remove('quinaBackgroundColor');
                        selectedNumbersElementList.remove(numberElement);
                        console.log(selectedNumbersElementList.length);

                        return;
                    }

                    selectedNumbersElementList.push(numberElement);
                    numberElement.classList.add('quinaBackgroundColor');

                    break;
            }
        }

        function randomlySelectNumbers() {
            const numberOfGameArea = doc.querySelector('[data-js="numberOfGameArea"]');
            while (selectedNumbersElementList.length < selectedGame["max-number"]) {
                var index = Math.ceil(Math.random() * (selectedGame.range - 1));
                var number = numberOfGameArea.childNodes[index];
                selectNumber(number, false);
            }

        }

        initialize();
    }
)(window, document, window.DOM);
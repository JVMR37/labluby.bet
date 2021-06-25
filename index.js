(
    function (win, doc, $) {
        'use strict';

        var $typeGameText = $('[data-js="typeGameText"]').get();

        var $lotofacilGameButton = $('[data-js="lotofacilButton"]').get();
        var $megaSenaGameButton = $('[data-js="megaSenaButton"]').get();
        var $quinaGameButton = $('[data-js="quinaButton"]').get();


        function initialize() {
            $typeGameText.textContent = "Lotofácil";
            $lotofacilGameButton.classList.add('lotofacilButtonSelectedStyle');
            initEvents();
        }

        function initEvents() {
            $('[data-js="lotofacilButton"]').on('click', changeTypeGame);
            $('[data-js="megaSenaButton"]').on('click', changeTypeGame);
            $('[data-js="quinaButton"]').on('click', changeTypeGame);
        }

        function changeTypeGame(e) {
            e.preventDefault();
            console.log(e);
            var button = e.target;
            var typeGameButton = button.getAttribute('data-js');
            console.log(button);

            switch (typeGameButton) {
                case 'lotofacilButton':
                    $typeGameText.textContent = "Lotofácil";
                    $lotofacilGameButton.classList.add('lotofacilButtonSelectedStyle');
                    $megaSenaGameButton.classList.remove('megaSenaButtonSelectedStyle');
                    $quinaGameButton.classList.remove('quinaButtonSelectedStyle');

                    buildGridWithNumbers(25);
                    break;

                case 'megaSenaButton':
                    $typeGameText.textContent = "Mega-Sena";

                    $lotofacilGameButton.classList.remove('lotofacilButtonSelectedStyle');
                    $megaSenaGameButton.classList.add('megaSenaButtonSelectedStyle');
                    $quinaGameButton.classList.remove('quinaButtonSelectedStyle');


                    buildGridWithNumbers(60)

                    break;

                case 'quinaButton':
                    $typeGameText.textContent = "Quina";

                    $lotofacilGameButton.classList.remove('lotofacilButtonSelectedStyle');
                    $megaSenaGameButton.classList.remove('megaSenaButtonSelectedStyle');
                    $quinaGameButton.classList.add('quinaButtonSelectedStyle');

                    buildGridWithNumbers(80);

                    break;
            }
        }

        function buildGridWithNumbers(numbersQuantity) {
            const numberOfGameArea = $('[data-js="numberOfGameArea"]').get();
            const $fragment = doc.createDocumentFragment();


            for (let index = 1; index <= numbersQuantity; index++) {
                var divNumber = doc.createElement('div');

                divNumber.classList.add('col-1', 'numberCircleStyle', 'd-flex', 'justify-content-center');
                divNumber.textContent = ('0' + index).slice(-2);

                $fragment.appendChild(divNumber);
            }

            numberOfGameArea.innerHTML = '';
            numberOfGameArea.appendChild($fragment);
        }

        initialize();
    }
)(window, document, window.DOM);
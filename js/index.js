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
        var gameTypeButtonList = [];

        var selectedNumbersElementList = [];

        var cartItens = [];

        var cartTotalPrice = 0.0;

        const unselectedNumberBackgroundColor = '#adc0c4';


        function initialize() {
            getGameTypes();
            createGameTypeButtons();
            changeTypeGame('Lotofácil');
            initEvents();
        }

        function initEvents() {
            $('[data-js="clearGameButton"]').on('click', handleClearGameButton);
            $('[data-js="completeGameButton"]').on('click', handleCompleteGameButton);
            $('[data-js="addCartButton"]').on('click', handleAddToCartButton);
            $('[data-js="saveCartButton"]').on('click', handleSaveCartButton);
        }

        function createGameTypeButtons() {
            const $gameButtonsGroup = $('[data-js="gameButtonsGroup"]').get();
            console.log($gameButtonsGroup);
            const $fragment = doc.createDocumentFragment();
            console.log(gameTypeList);
            gameTypeList.forEach(
                function (gameTypeObject) {
                    const $div = doc.createElement('div');
                    $div.classList.add('col-md-3');

                    $div.appendChild(createGameTypeButtonElement(gameTypeObject));
                    $fragment.appendChild($div);
                }
            );

            $gameButtonsGroup.appendChild($fragment);
        }

        function createGameTypeButtonElement(gameTypeObject) {
            var $gameButton = doc.createElement('button');
            $gameButton.setAttribute('data-js', gameTypeObject.type);

            $gameButton.classList.add('btn', 'rounded-pill', 'gameButtonStyle');

            $gameButton.style.setProperty('color', gameTypeObject.color);
            $gameButton.style.setProperty('border-color', gameTypeObject.color);


            $gameButton.textContent = gameTypeObject.type;

            $gameButton.addEventListener('click', handleGameRadioButtonClick);

            $gameButton.addEventListener('mouseover', function (e) {
                var gameButtonElement = e.target;
                setSelecteStyleToButton(gameButtonElement, getGameObjectByName(e.target.getAttribute('data-js')).color);

            });

            $gameButton.addEventListener('mouseout', function (e) {
                var gameButtonElement = e.target;
                var gameObject = getGameObjectByName(e.target.getAttribute('data-js'));
                if (selectedGame.type === gameObject.type) return
                setUnselecteStyleToButton(gameButtonElement, gameObject.color);
            });

            gameTypeButtonList.push($gameButton);

            return $gameButton;
        }

        function setSelecteStyleToButton(buttonElement) {
            buttonElement.style.backgroundColor = buttonElement.style.borderColor;
            buttonElement.style.color = 'white';
            buttonElement.style.fontWeight = 'bold';
        }

        function setUnselecteStyleToButton(buttonElement) {
            buttonElement.style.backgroundColor = 'transparent';
            buttonElement.style.color = buttonElement.style.borderColor;
            buttonElement.style.fontWeight = 'normal';
        }

        function getGameTypes() {
            var ajax = new XMLHttpRequest();
            ajax.open('GET', './assets/games.json', false);

            ajax.send();

            var gamesJsonDecoded = JSON.parse(ajax.responseText);
            gameTypeList = gamesJsonDecoded.types;
        }

        function handleGameRadioButtonClick(e) {
            e.preventDefault();
            var newTypeGame = e.target.getAttribute('data-js');

            changeTypeGame(newTypeGame);
        }

        function handleClearGameButton() {
            removeAllSelectedElements();
        }

        function handleCompleteGameButton() {
            if (selectedNumbersElementList.length === selectedGame["max-number"]) {
                console.log("Era pra remover");
                removeAllSelectedElements();
            }
            randomlySelectNumbers();
        }

        function removeAllSelectedElements() {
            selectedNumbersElementList.forEach(
                function (numberElement) {
                    numberElement.style.backgroundColor = unselectedNumberBackgroundColor;
                }
            );

            selectedNumbersElementList = [];
        }

        function getGameObjectByName(gameName) {
            return gameTypeList.filter(
                function (gameObject) {
                    return gameObject.type === gameName
                }
            )[0];
        }

        function changeTypeGame(newTypeGame) {
            selectedGame = getGameObjectByName(newTypeGame);

            $gameDescriptionText.textContent = selectedGame.description;
            $typeGameText.textContent = selectedGame.type;

            selectedNumbersElementList = [];
            buildGridWithNumbers(selectedGame.range);

            console.log(gameTypeButtonList);

            gameTypeButtonList.forEach(
                function (gameButtomElement) {
                    if (gameButtomElement.getAttribute('data-js') === selectedGame.type) {
                        setSelecteStyleToButton(gameButtomElement);
                    } else {
                        setUnselecteStyleToButton(gameButtomElement,);
                    }
                }
            );

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

            if (selectedNumbersElementList.indexOf(numberElement) === -1 &&
                selectedNumbersElementList.length === selectedGame["max-number"]) {
                win.alert("Você já selecionou o máximo de números permitidos para esse jogo !");
                return;
            }

            selectNumber(numberElement, true);
        }

        function selectNumber(numberElement, removeRepeated) {
            var indexForSelectedElement = selectedNumbersElementList.indexOf(numberElement);

            if (indexForSelectedElement !== -1) {
                if (!removeRepeated) return

                numberElement.style.backgroundColor = unselectedNumberBackgroundColor;
                selectedNumbersElementList.splice(indexForSelectedElement, 1);

                return;
            }

            selectedNumbersElementList.push(numberElement);
            numberElement.style.backgroundColor = selectedGame.color;
        }

        function randomlySelectNumbers() {
            const numberOfGameArea = doc.querySelector('[data-js="numberOfGameArea"]');
            while (selectedNumbersElementList.length < selectedGame["max-number"]) {
                var index = Math.ceil(Math.random() * (selectedGame.range - 1));
                var number = numberOfGameArea.childNodes[index];
                selectNumber(number, false);
            }

        }

        function addNumbersToCart() {
            var cartItemObject = {
                selectedNumber: [],
                typeGame: "",
                price: 0.0
            };

            var selectedNumbersList = selectedNumbersElementList.map(
                function (numberElement) {
                    return numberElement.textContent;
                }
            );

            selectedNumbersList.sort();

            cartItemObject.selectedNumber = selectedNumbersList.reduce(
                function (acumulado, number, index, array) {
                    if (index !== array.length - 1) {
                        return acumulado + number + ', ';
                    }
                    return acumulado + number + '.'
                }, ''
            );


            cartItemObject.typeGame = selectedGame.type;
            cartItemObject.price = selectedGame.price;

            cartTotalPrice += cartItemObject.price;

            updateTotalPriceText();

            addItemCartElement(cartItemObject);
        }

        function handleAddToCartButton(e) {
            e.preventDefault();

            if (selectedNumbersElementList.length < selectedGame["max-number"]) {
                var remainingNumbers = Number(selectedGame["max-number"]) - selectedNumbersElementList.length;
                return win.alert("Você ainda pode selecionar " + remainingNumbers + " número(s) !");
            }

            if (cartItens.length === 0) removeNoItensTextRow();

            addNumbersToCart();

            removeAllSelectedElements();
        }

        function addItemCartElement(cartItemObject) {
            var $fragment = doc.createDocumentFragment();
            var $cartItensArea = $('[data-js="cartItensArea"]').get();

            var $row = doc.createElement('div');
            var $firstCol = doc.createElement('div');
            var $secondCol = doc.createElement('div');

            var $itemCartContainer = doc.createElement('div');
            var $rowOfSelectedNumber = doc.createElement('div');
            var $spanOfSelectedNumbers = doc.createElement('span');

            var $deleteGameButton = doc.createElement('button');
            var $iconDelete = doc.createElement('i');


            $firstCol.classList.add("col-2");
            $secondCol.classList.add("col-10");

            $itemCartContainer.classList.add(
                'container',
                'border-start', 'border-4',
                'rounded-start',
            );

            $itemCartContainer.setAttribute('style', `border-color: ${selectedGame.color} !important`);

            $spanOfSelectedNumbers.classList.add('selectedNumbersTextStyle');
            $rowOfSelectedNumber.classList.add('row');
            $iconDelete.classList.add('fa', 'fa-trash', 'iconDeleteStyle');
            $deleteGameButton.classList.add('btn', 'align-middle');
            $row.classList.add('row', 'px-3', 'align-items-center', 'mb-2', 'mt-2');

            $deleteGameButton.appendChild($iconDelete);
            $deleteGameButton.setAttribute('data-js', 'deleteGameButton');
            $deleteGameButton.addEventListener('click', handleRemoveCartButton);

            $spanOfSelectedNumbers.setAttribute('data-js', 'selectedNumbersText');
            $spanOfSelectedNumbers.textContent = cartItemObject.selectedNumber;
            $rowOfSelectedNumber.appendChild($spanOfSelectedNumbers);

            var $priceOfGameElement = doc.createElement('div');

            $priceOfGameElement.innerHTML = `
                <div class="row">
                    <div class="col">
                        <span data-js="typeGameText" class="gameTextStyle" style="color: ${selectedGame.color}">
                            ${cartItemObject.typeGame}
                        </span>
                        <span class="gamePriceTextStyle"> R$ </span>
                        <span data-js="priceGame" class="gamePriceTextStyle"
                            >${cartItemObject.price.toFixed(2)}</span
                        >
                    </div>
                </div>
            `

            $itemCartContainer.appendChild($rowOfSelectedNumber);
            $itemCartContainer.appendChild($priceOfGameElement);


            $firstCol.appendChild($deleteGameButton);
            $secondCol.appendChild($itemCartContainer);


            $row.appendChild($firstCol);
            $row.appendChild($secondCol);

            $row.setAttribute('data-js', cartItemObject.typeGame);

            cartItens.push($row);

            $fragment.appendChild($row);


            $cartItensArea.appendChild($fragment);

        }

        function removeNoItensTextRow() {
            var $noItensTextRow = $('[data-js="noItensTextRow"]').get();
            $noItensTextRow.remove();
        }

        function insertNoItensTextRow() {
            var $cartItensArea = $('[data-js="cartItensArea"]').get();
            var $noItensTextRow = doc.createElement('div');
            $noItensTextRow.innerHTML = `<div class="row mb-3 mt-3 mx-2" data-js="noItensTextRow">
                                                <span class="noItensTextStyle">
                                                Ainda não há jogos adicionados no carrinho : (
                                                </span>
                                        </div>`

            $cartItensArea.appendChild($noItensTextRow);
        }

        function removeCartItemElement(rowOfCartItem) {
            var indexToRemove = cartItens.indexOf(rowOfCartItem);

            cartItens.splice(indexToRemove, 1);

            rowOfCartItem.remove();
        }

        function handleRemoveCartButton(e) {
            e.preventDefault();

            var $rowOfCartItem = e.target.parentElement.parentElement.parentElement;
            var typeGame = $rowOfCartItem.getAttribute('data-js');

            removeCartItemElement($rowOfCartItem);

            cartTotalPrice -= getGameObjectByName(typeGame).price;

            updateTotalPriceText();

            if (cartItens.length === 0) insertNoItensTextRow();
        }

        function updateTotalPriceText() {
            var $totalCartPriceElement = $('[data-js="totalCartPrice"]').get();

            $totalCartPriceElement.textContent = cartTotalPrice.toFixed(2);
        }

        function clearCartItemList() {
            cartItens.forEach(
                function (rowElement) {
                    rowElement.remove();
                }
            );

            cartTotalPrice = 0;
            updateTotalPriceText();

            cartItens = [];
            insertNoItensTextRow();
        }

        function handleSaveCartButton() {
            if (cartItens.length > 0) {
                clearCartItemList();
                win.alert("Seu jogos foram salvos com sucesso !");
            }
        }



        initialize();
    }
)(window, document, window.DOM);
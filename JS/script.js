$(() => {
	const screen = $('.screen');
	const clearScreenBtn = $('#clearSrceen');
	const point = $('#point');
	const add = $('#add');
    const multiply = $('#multiply');
	const sum = $('#sum');
	const subtract = $('#subtract');
	const divide = $('#divide');
	const deleteChar = $('#delete');
	 let operatorCounter = 0;
	 let pointCounter = 0;

    const arrNumb = $(".numbers");

    // Add numbers to screen
    for (let i=0; i<arrNumb.length; i++) {
        arrNumb.eq(i).on("click", e => {
            const $this = $(e.currentTarget).text();
            showOnScreen($this);
            operatorCounter = 0;
        });
    }

    // Clear screen
    clearScreenBtn.on('click', () => clearScreen());

    // Add " . " to the screen
    point.on('click', () => {
        if (pointCounter === 0) {
            addOperator(".");
            pointCounter++;
        } else {
            alert("You can add only one '.' to number!")
        }
    });

    // Add " + " to the screen
    add.on('click', () => {
        addOperator("+");
        pointCounter = 0;
    });

    // Add " - " to the screen
    subtract.on('click', () => {
        addOperator("-");
        pointCounter = 0;
    });

    // Add " * " to the screen
    multiply.on('click', () => {
        addOperator("*");
        pointCounter = 0;
    });

    // Add " / " to the screen
    divide.on('click', () => {
        addOperator("/");
        pointCounter = 0;
    });


    // Sum numbers from screen
    sum.on('click', () => {
        calculate()
    });

    // Delete last character from the screen
    deleteChar.on('click', () => {
       deleteLast();
    });

    // function that sum elements from the screen
    function calculate() {
        let number = eval((screen.text()));
        screen.text(number);
    }

    //function that delete last character for the screen
    function deleteLast() {
        let screenText = screen.text();
        screenText = screenText.slice(0,-1);
        screen.text(screenText);
    }

    // function that check if the operator can be added to the screen
    function addOperator (operator) {
        if( operatorCounter === 0 ) {
            showOnScreen(operator);
            operatorCounter++;
        } else {
            alert("You can't add more then one operator in a row!")
        }
    }

    // function that add element to the screen of the calculator
    function showOnScreen(element) {
        let sum = screen.text();
        screen.text(sum + element);
    }

    // function that clear screen
    function clearScreen() {
      screen.text('');
    }

    $(window).keydown(function (e) {
        //use e.which
        console.log(e.keyCode);

        switch(e.keyCode) {
            case 110:
                if (pointCounter === 0) {
                    addOperator(".");
                    pointCounter++;
                } else {
                    alert("You can add only one '.' to number!")
                }
                break;
            case 107:
                addOperator("+");
                pointCounter = 0;
                break;
            case 109:
                addOperator("-");
                pointCounter = 0;
                break;
            case 106:
                addOperator("*");
                pointCounter = 0;
                break;
            case 111:
                addOperator("/");
                pointCounter = 0;
                break;
            case 96:
                showOnScreen(0);
                operatorCounter = 0;
                break;
            case 97:
                showOnScreen(1);
                operatorCounter = 0;
                break;
            case 98:
                showOnScreen(2);
                operatorCounter = 0;
                break;
            case 99:
                showOnScreen(3);
                operatorCounter = 0;
                break;
            case 100:
                showOnScreen(4);
                operatorCounter = 0;
                break;
            case 101:
                showOnScreen(5);
                operatorCounter = 0;
                break;
            case 102:
                showOnScreen(6);
                operatorCounter = 0;
                break;
            case 103:
                showOnScreen(7);
                operatorCounter = 0;
                break;
            case 104:
                showOnScreen(8);
                operatorCounter = 0;
                break;
            case 105:
                showOnScreen(9);
                operatorCounter = 0;
                break;
            case 8:
                deleteLast();
                break;
            case 13:
                calculate();
                break;
            case 46:
                clearScreen();
                break;
        }
    });
});




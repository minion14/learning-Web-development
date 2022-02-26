// Budget Controller 

var budgetController = (function () {

    var Expense = function (id, description, value) {
        this.id = id,
            this.description = description;
        this.value = value,
            this.percentage = -1
    };

    Expense.prototype.calcPercentage = function (totalIncome) {
        if (totalIncome > 0) {
            this.percentage = Math.round((this.value / totalIncome) * 100);
        }
        else {
            this.percentage = -1;
        }
    };

    Expense.prototype.getPercentage = function () {
        return this.percentage;
    };

    var Income = function (id, description, value) {
        this.id = id,
            this.description = description,
            this.value = value;
    };

    var calculateTotal = function (type) {
        var sum = 0;
        data.allItems[type].forEach(function (curr) {
            sum += curr.value;
        });
        data.totals[type] = sum;
    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
    };

    return {
        addItem: function (type, des, val) {
            var newItem, ID;

            //create new ID
            //console.log(data);
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            }
            else {
                ID = 0;
            }
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            }
            else {
                newItem = new Income(ID, des, val);
            }
            //push it into our data structure
            data.allItems[type].push(newItem);

            //return the new element
            return newItem;
        },

        delelteItem: function (type, id) {
            var ids, index;
            ids = data.allItems[type].map(function (current) {
                return current.id;
            });
            index = ids.indexOf(id);
            if (index !== -1) {
                data.allItems[type].splice(index, 1);
            }
        },

        calculateBudget: function () {
            //calculate total expense and income
            calculateTotal("exp");
            calculateTotal("inc");

            //calculate the budget: income -expense
            data.budget = data.totals.inc - data.totals.exp;

            //calculate the percentage of income that we spent
            if (data.totals.inc > 0) {
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            }
            else {
                data.percentage = -1;
            }
        },

        calculatePercentage: function () {
            data.allItems.exp.forEach(function (curr) {
                curr.calcPercentage(data.totals.inc);

            });
        },

        getPercentage: function () {
            var allPerc = data.allItems.exp.map(function (curr) {
                return curr.getPercentage();
            });
            return allPerc;
        },

        getBudget: function () {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            }
        },

        testing: function () {
            console.log(data);
        }
    };

})();

//UI controller

var uiController = (function () {

    var domsStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expenseContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expensesPercentageLabel: '.item__percentage',
        monthAndYear: '.budget__title--month'
    };
    return {
        getInput: function () {
            return {
                type: document.querySelector(domsStrings.inputType).value,
                description: document.querySelector(domsStrings.inputDescription).value,
                value: parseFloat(document.querySelector(domsStrings.inputValue).value)
            };
        },

        addListItem: function (obj, type) {
            //create HTML string with placeholder text
            var html, newHtml, element;

            if (type === 'inc') {
                element = domsStrings.incomeContainer;
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix">' +
                    '<div class="item__value">+ %value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline">' +
                    '</i></button></div></div></div>'
            }
            else if (type === 'exp') {
                element = domsStrings.expenseContainer;
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix">' +
                    '<div class="item__value">- %value%</div><div class="item__percentage">21%</div><div class="item__delete">' +
                    '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }
            //Replace the placeholder test with some actuall data

            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            //console.log(obj.value);

            newHtml = newHtml.replace('%value%', this.formatNumber(obj.value));

            //Insert the Html into the DOM

            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);

        },

        deleteListItems: function (selectorID) {
            var el;
            el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);

        },


        clearFields: function () {
            var fields, fieldsArrays;
            fields = document.querySelectorAll(domsStrings.inputDescription + ',' + domsStrings.inputValue);

            fieldsArrays = Array.prototype.slice.call(fields);

            //samajh ni aya 
            fieldsArrays.forEach(function (curr, index, array) {
                curr.value = '';
            });
            fieldsArrays[0].focus();
        },

        displaybudget: function (obj) {

            document.querySelector(domsStrings.budgetLabel).textContent = this.formatNumber(obj.budget);
            document.querySelector(domsStrings.incomeLabel).textContent = this.formatNumber(obj.totalInc);
            document.querySelector(domsStrings.expensesLabel).textContent = this.formatNumber(obj.totalExp);

            if (obj.percentage > 0) {

                document.querySelector(domsStrings.percentageLabel).textContent = obj.percentage + '%';

            }
            else {
                document.querySelector(domsStrings.percentageLabel).textContent = '--';

            }

        },
        displayPercentage: function (percentage) {

            var fields = document.querySelectorAll(domsStrings.expensesPercentageLabel);
            //console.log(fields);

            var nodeListForEach = function (list, callback) {
                for (var i = 0; i < list.length; i++) {
                    callback(list[i], i);
                }
            };

            nodeListForEach(fields, function (current, index) {

                if (percentage[index] > 0) {
                    current.textContent = percentage[index] + '%';
                }
                else {
                    current.textContent = '--';
                }
            });

        },
        formatNumber: function (num) {
            if (num !== 0 && num !== undefined) {
                var newNum = num.toFixed(2);
                var numObj = newNum.split('.');
                //console.log(numObj);
                numObj[0] = parseInt(numObj[0]);
                numObj[0] = numObj[0].toLocaleString();
                numObj[1] = parseInt(numObj[1]);
                //console.log(numObj);
                return (numObj[0] + '.' + numObj[1]);
            }
            else if (num === undefined) {
                return 0.00;
            }
            else {
                return 0.00;
            }
        },
        displayMonth: function () {

            var now, year, month;
            now = new Date();
            year = now.getFullYear();
            month = now.toLocaleString('default', { month: 'long' });

            document.querySelector(domsStrings.monthAndYear).textContent = month + ', ' + year;

        },
        getDomStrings: function () {
            return domsStrings;
        }
    };

})();

// Global App Controller

var controller = (function (budgetCtrl, uiCtrl) {

    var setupEventListeners = function () {

        var DomStrings = uiCtrl.getDomStrings();
        //console.log(DomStrings);

        document.querySelector(DomStrings.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which === 12) {
                ctrlAddItem();
            }
        });

        document.querySelector(DomStrings.container).addEventListener('click', ctrlDeleteItem);

    };

    var updateBudget = function () {

        //1. calculate the budget
        budgetCtrl.calculateBudget();

        //2. return the budget
        var budget = budgetCtrl.getBudget();
        //console.log(budget);
        //3. Display the budget on the UI
        uiCtrl.displaybudget(budget);

    };

    var updatePercentage = function () {
        //1. calculate percentages
        budgetCtrl.calculatePercentage();

        //2. Read percentages from the budget controller
        var percentages = budgetCtrl.getPercentage();
        //console.log(percentages);

        //3. Update the UI with the new percentage
        uiCtrl.displayPercentage(percentages);

    }

    var ctrlAddItem = function () {
        //console.log('button clicked');

        var newItem, input;

        //1.get the filled input data
        var input = uiCtrl.getInput();
        //console.log(input);
        if (input.description !== "" && !isNaN(input.value) && input.value > 0) {

            //2. add the item to the budget controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);

            //3. add the item to the UI

            uiCtrl.addListItem(newItem, input.type);

            //4. clear fields
            uiCtrl.clearFields();

            //5. calculate and update budget
            updateBudget();

            //6. calculate and update percentages
            updatePercentage();
        }

    };

    var ctrlDeleteItem = function (event) {
        var ItemID, splitID, type, id;
        ItemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
        //console.log(ItemID);
        if (ItemID) {
            //inc-1
            splitID = ItemID.split('-');
            //console.log(splitID);
            type = splitID[0];
            id = parseInt(splitID[1]);

            //1. delete the item from the data structure
            budgetCtrl.delelteItem(type, id);

            //2. delete the item from the UI
            uiCtrl.deleteListItems(ItemID);

            //3. update and show the new budget
            updateBudget();

            updatePercentage();
        }
    };

    return {
        init: function () {
            console.log('App has started');
            uiCtrl.displaybudget({
                budget: 0,
                totalInc: 0,
                toatlExp: 0,
                percentage: 0
            });
            setupEventListeners();
            uiCtrl.displayMonth();
        }
    }

})(budgetController, uiController);

controller.init();
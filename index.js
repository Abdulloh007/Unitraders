window.addEventListener('DOMContentLoaded', function () {
    'use strict';
    //Tabination
    const tabination = document.querySelectorAll('.u-tabination');
    //--> Secont Lewel Tabination
    const secontLewelTabination = document.querySelectorAll('.u-nd_tabination');

    function activeTabination(elem,elemNav, elemNavItem, elemTabItem) {
        const tabNav = elem.querySelector(elemNav),
        tabBtns = elem.querySelectorAll(elemNavItem),
        tabs = elem.querySelectorAll(elemTabItem);

        tabNav.addEventListener('click', function () {
            for (let i = 0; i < tabBtns.length; i++) {
                if (event.target == tabBtns[i] || event.target == tabBtns[i].children[0]) {
                    showTab(i);
                }
            }
        })
        showTab(0);
        function showTab(n) {
            tabBtns.forEach((item) => item.classList.remove('active'));
            tabs.forEach((item) => item.classList.remove('active'));
            tabBtns[n].classList.add('active');
            tabs[n].classList.add('active');
        }
    }
    if (tabination !== undefined || tabination !== null || secontLewelTabination != undefined || secontLewelTabination != null) {
        tabination.forEach(item => activeTabination(item, '.u-tab_nav', '.u-tab_nav li', '.u-tab_item'));
        secontLewelTabination.forEach((item) => activeTabination(item, '.u-nd_tab_nav', '.u-nd_tab_nav li', '.u-nd_tab_item'));
    }

    //Show More
    const showMoreList = document.querySelectorAll('.u-show_more');

    function showMoreFromeList(elem) {
        const showMoreItem = elem.querySelectorAll('.u-show_more li');
        let collapseHeight = 0;

        for (let i = 0; i < parseInt(elem.dataset.show); i++) {
            if (i == parseInt(elem.dataset.show) - 1) {
                if (elem.classList.contains('u-liner-digs') || elem.classList.contains('u-tasker_list') || elem.classList.contains('u-req_list')) {
                    collapseHeight += 10 * (parseInt(elem.dataset.show) - 1);
                }
            }
            collapseHeight += showMoreItem[i].offsetHeight;
            elem.style.height = collapseHeight + 'px';
            if (i == parseInt(elem.dataset.show) - 1) {
                collapseHeight = 0;
                break;
            }
        }

        elem.nextElementSibling.addEventListener('click', function () {
            if (this.classList.contains('not_opened')) {
                elem.style.height = elem.scrollHeight + 'px';
                this.classList.remove('not_opened');
                this.innerHTML = `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.12488 13.7499L10.9999 6.87488L17.8749 13.7499" stroke="#97A0B7" stroke-linecap="round" stroke-linejoin="round"/></svg>
                <span>Меньше</span>`;
            }else if (!this.classList.contains('not_opened')) {
                for (let i = 0; i < parseInt(elem.dataset.show); i++) {
                    if (i == parseInt(elem.dataset.show) - 1) {
                        if (elem.classList.contains('u-liner-digs') || elem.classList.contains('u-tasker_list') || elem.classList.contains('u-req_list')) {
                            collapseHeight += 10 * (parseInt(elem.dataset.show) - 1);
                        }
                    }
                    collapseHeight += showMoreItem[i].offsetHeight;
                    elem.style.height = collapseHeight + 'px';
                    if (i == parseInt(elem.dataset.show) - 1) {
                        collapseHeight = 0;
                        break;
                    }
                }
                this.classList.add('not_opened');
                this.innerHTML = `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.875 8.25L11 15.125L4.125 8.25" stroke="#97A0B7" stroke-linecap="round" stroke-linejoin="round"/></svg>
                <span>Загрузить больше</span>`;
            }
        })
    }
    showMoreList.forEach(item => showMoreFromeList(item));

    //PopUp`s
    let popUpBtns = document.querySelectorAll('.u-pop_up-btn'),
        popUps = document.querySelectorAll('.u-pop_up');
    
    function popUper(elem) {
        popUps.forEach((item) => {
            const closeBtn = item.querySelector('.fa-close');
            closeBtn.addEventListener('click', function () {
                item.classList.remove('active');
            })
        });
        elem.addEventListener('click', function () {
            for (let i = 0; i < popUps.length; i++) {
                if (elem.id == popUps[i].dataset.target) {
                    popUps[i].classList.add('active');
                }
            }
        })
    }
    if (popUpBtns != undefined && popUps != undefined) {
        popUpBtns.forEach((item) =>  popUper(item));
    }

})

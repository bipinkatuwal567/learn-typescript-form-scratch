import FullList from "../module/FullLists";

interface DOMList{
    ul: HTMLUListElement,
    clear(): void,
    render(fullList: FullList): void,
}

export default class ListTemplate implements DOMList{
    static instance: ListTemplate = new ListTemplate();
    ul: HTMLUListElement;

    private constructor(){
        this.ul = document.getElementById("listItems") as HTMLUListElement;
    }

    clear(): void {
        this.ul.innerHTML = "";
    }

    render(fullList: FullList): void {
        fullList.list.forEach(item => {
            const 
        })
    }
}
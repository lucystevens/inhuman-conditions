import { Input } from "@angular/core";
import { GameSetup } from "./card-definitions";

export abstract class BaseChooser {

    @Input() setup: GameSetup;

    nextStep() {
        this.setup.step++;
        setTimeout(() => 
            this.smoothScroll("#setup-step-" + this.setup.step),
        100);
    }

    smoothScroll(elementID: string){
        console.log("Scrolling to " + elementID);
        const element = document.querySelector(elementID);
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
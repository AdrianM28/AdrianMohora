class SpaceShip {
    constructor(color) {
        this.active = false;
        this.color = color;
    }

    createShipImage() {
        const shipImage = document.createElement('img');
        shipImage.src = this.random();
        shipImage.style.marginTop = "20px";
        shipImage.style.display = "block";
        shipImage.style.width = "150px";

        return shipImage;
    }

    showShips() {
        this.shipElement = this.createShipImage();
        this.shipElement.style.position = "relative";
        this.shipElement.style.top = "0px";
        this.shipElement.style.left = "0px";
        document.body.append(this.shipElement);
        this.clickChecked();
    }

    clickChecked() {
        this.shipElement.addEventListener('click', () => {
            this.active = !this.active;
            this.shipElement.style.background = this.active ? "blue" : "transparent";
        })
    }

    moveShipRight() {
        if (this.active) {
            const left = parseInt(this.shipElement.style.left, 10);
            this.shipElement.style.left = left + 10 + "px";
        }
    }

    // moveShipleft() {
    //     if (this.active) {
    //         const right = parseInt(this.shipElement.style.right, 10);
    //         this.shipElement.style.right = right + 10 + "px";
    //     }
    // }

    // moveShipUP() {
    //     if (this.active) {
    //         const up = parseInt(this.shipElement.style.down, 10);
    //         this.shipElement.style.up = up + 10 + "px";
    //     }
    // }

    // moveShipDown() {
    //     if (this.active) {
    //         const down = parseInt(this.shipElement.style.top, 10);
    //         this.shipElement.style.down = down + 10 + "px";
    //     }
    // }

    random() {
        const optionList = ["blue.png", "green.png", "red.png"]
        const randomOption = Math.floor(Math.random() * 3)
        return optionList[randomOption];
    }
}

const shipNumeroOne = new SpaceShip();
const shipNumeroTwo = new SpaceShip();
const shipNumeroThree = new SpaceShip();
shipNumeroOne.showShips();
shipNumeroTwo.showShips();
shipNumeroThree.showShips();


const spaceList = [shipNumeroOne, shipNumeroTwo, shipNumeroTwo];

const btnStart = document.getElementById('start');
btnStart.addEventListener('click', function () {
    var Space = new SpaceShip();
    spaceList.push(Space);
    Space.showShips(document.body);
})

document.addEventListener('keydown', function (naveta) {
    if (naveta.key === "ArrowRight") {
        spaceList.forEach((Space) => Space.moveShipRight());
    }
    // else
    //     if (naveta.key === "ArrowLeft") {
    //         spaceList.forEach((Space) => Space.moveShipleft());
    //     }
    //     else
    //         if (naveta.key === "ArrowUp") {
    //             spaceList.forEach((Space) => Space.moveShipUP());
    //         }
    //         else
    //             if (naveta.key === "ArrowDown") {
    //                 spaceList.forEach((Space) => Space.moveShipDown());
    //             }
})
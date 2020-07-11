class CustomIterator {
    private cursor = 0;
    private value: number;

    constructor(private arr: number[], private divisor: number = 1 ) {
    }

    public next() {
        while(this.cursor < this.arr.length) {
            this.value = this.arr[this.cursor++];
            if(this.value % this.divisor === 0) {
                return { done: false, value: this.value }
            }
        }
        return { done: true, value: this.value }
    }

    [Symbol.iterator](){
        return {
            next: this.next.bind(this)
        }
    }
}

const consumer = new CustomIterator([1,2,3,4,5,6,7,8,9,10], 3);


Array.from(consumer).forEach((v) =>{
    console.log(v);
});

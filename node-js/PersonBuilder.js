function Person(name, gender, height, weight){
    this.name = name;
    this.gender = gender;
    this.height = height;
    this.weight= weight;
}

function PersonBuilder(){

    this.setName = (name)=>{
        this.name = name;
        return this;
    }

    this.setGender = (gender)=>{
        this.gender = gender;
        return this;
    }

    this.setHeight = (height)=>{
        this.height = height;
        return this;
    }

    this.setWeight = (weight)=>{
        this.weight = weight;
        return this;
    }

    this.build = () => new Person(this.name,this.gender,this.height, this.weight);
}


// let person = new Person('kapil','M',5.3,60);
let person = new PersonBuilder()
                .setName('Kapil')
                .setGender('Male')
                .setHeight(5.3)
                // .setWeight(60)
                .build();
console.log(person);
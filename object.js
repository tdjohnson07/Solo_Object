var house={
      familyName:"Stark",
      kingdom: "the North",
      castle: "Winterfell",
      lord:"Eddard",
      lady:"Catlin",
      trueChildren:["Robb", "Sansa", "Brandon", "Arya", "Rickon"],
      bastardChildren: ["Jon Snow"],
      sword:"Ice",
      numberOfChildren: 5,
      animal:"direwolf",
      words:"Winter is Coming",
      printChildren: function(){
        return this.trueChildren[0]+", "+this.trueChildren[1]+ ", "+
        this.trueChildren[2]+", "+
        this.trueChildren[3]+ ", " + this.trueChildren[4];
      },
      about: function(){
        return console.log("House " + this.familyName + " rules "+ this.kingdom+
      " from their castle in "+
    this.castle + ". Lord " + this.lord + " " + this.familyName + " married Lady "+
   this.lady + " and had " + this.numberOfChildren + " children named: " +
    house.printChildren()+". " + this.lord +" had one bastard, " + this.bastardChildren+
    ". The family sword is named " + this.sword + ". The logo is a " +this.animal+
  ". Their words are, " + this.words +"." );
  }
}
house.about();

const films = [
    {
        filmId:1,
        actorId:1,
        filmName:"Dhoom",
        filmCategory:1
    },
    {
        filmId:2,
        actorId:1,
        filmName:"Dhamaal",
        filmCategory:2
    },
    {
        filmId:3,
        actorId:1,
        filmName:"anabelle",
        filmCategory:3
    },
    {
        filmId:1,
        actorId:2,
        filmName:"Dhoom",
        filmCategory:1
    }
];
const filmCategory = [{
    categoryId:1,
    category: 'Action'
},
{
    categoryId:2,
    category: 'Comedy'
},
{
    categoryId:3,
    category: 'Horror'
}];

find films with its category for an actorId

function findActorFilms (actorId){
    /* step1 find all actorId from films

     step2 create a object where keep actorId as key and whole object as value and other array of filmCategoryIds
     like actionFilmMap = { 1: {
             filmId:1,
             actorId:1,
             filmName:"Dhoom",
             filmCategory:1
         }}
     and filmCategoryIds = [1,2,3]

     step-3 from filmCategoryIds find all category name in filmCategory
     
     step-4 create a object with categoryId as key
     like  categoryMap = {1:{
         categoryId:1,
         category: 'Action'
     }}

    

     step-5 Now create final response
          iterate through actorId object and corresponding to film category look into category map
     */
}
console.log(findActorFilms())

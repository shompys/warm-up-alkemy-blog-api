import Categories from './categories.models';

export const createCategories = _ => {

    setTimeout(async () =>{

        try{

            const count = await Categories.findAndCountAll();
            if(count.count > 0) return;

            const emulation = await Promise.all([
                Categories.create({category: 'games'}),
                Categories.create({category: 'Literature'}),
                Categories.create({category: 'Foods'}),
                Categories.create({category: 'Sports'}),
                Categories.create({category: 'Finances'}),
                Categories.create({category: 'Others'})
            ])
            
            console.log(emulation)
        }catch(err){

            console.log(err)
            
        }
    },1000)
}



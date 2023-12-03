const handlecategory = async()=>{
    const res =await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
    const model = data.data;
    // console.log(model)
     const buttonContainer = document.getElementById('btn-container');
     model.forEach(category=>{
        const div = document.createElement('div');
        div.innerHTML = `
        <button onclick="handleCategoryId('${category.category_id}')"  class="px-4 font-medium text-base py-3 text-black bg-[#b9b9bc] focus:bg-red-500">${category.category}</button> 
        `
        buttonContainer.appendChild(div);
     })
     console.log(model);
}
const handleCategoryId = async(categoryId)=>{
   console.log(categoryId)
   const res = await fetch (`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
   const data = await res.json();
   console.log(data.data.length);
   
   const cardContainer = document.getElementById('card-container');
   cardContainer.innerHTML = " ";
   const card2Container = document.getElementById('card2-container');
   
    card2Container.innerHTML = " "; 

   if(data.data.length>0){
    data.data?.forEach((blogs)=>{
        const div = document.createElement('div');
        // console.log(blogs);

            const postedDate = blogs.others.posted_date;
           
                const convertDate = parseInt(postedDate);
    
                const hour = Math.floor(convertDate / 3600);
                const min = Math.floor((convertDate  - hour*3600)/60)
               
                let time = "";
                let background = "";
                if(hour > 0 || min >0){
                  time =`${hour}hrs  ${min}min ago`;
                  background = "blackColor"
                }
           
          
        
       
                

        // console.log(postedDate)
         div.innerHTML = `
         <div  class="card card-compact w-full lg:w-96 bg-base-100 shadow-xl">
         <figure class="relative"><img class="lg:h-[200px]  lg:w-[312px] px-5 lg:px-0"  src="${blogs.thumbnail}" alt="Shoes" /></figure>
         <div class="absolute bottom-40 right-12">
         <p class="text-xs p-1 text-white font-light ${background}">${time}</p>
             </div>
             <div class="card-body">
                 <div class="flex gap-2 md:gap-4 lg:gap-6 mt-5 justify-center ">
                     <div>
                     <img class="rounded-full w-10 h-10" src="${blogs.authors[0].profile_picture}" alt="">

                     </div>
                     <div>

                     <h1 class="text-[15px] font-bold text-[#171717]">${blogs.title}</h1>
                     
                
                 <div class="flex mt-3 items-center gap-4">
                     <p class="font-normal text-base text-[#171717B2]">${blogs.authors[0].profile_name}</p>
                     <p class="">
                     ${blogs.authors[0].verified ?
                       `
                       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#2568EF">
                         <g clip-path="url(#clip0_13_1000)">
                           <path d="M19.375 10.0001C19.375 10.8001 18.3922 11.4595 18.1953 12.197C17.9922 12.9595 18.5063 14.022 18.1203 14.6892C17.7281 15.3673 16.5484 15.4486 15.9984 15.9986C15.4484 16.5486 15.3672 17.7282 14.6891 18.1204C14.0219 18.5064 12.9594 17.9923 12.1969 18.1954C11.4594 18.3923 10.8 19.3751 10 19.3751C9.2 19.3751 8.54062 18.3923 7.80312 18.1954C7.04062 17.9923 5.97813 18.5064 5.31094 18.1204C4.63281 17.7282 4.55156 16.5486 4.00156 15.9986C3.45156 15.4486 2.27187 15.3673 1.87969 14.6892C1.49375 14.022 2.00781 12.9595 1.80469 12.197C1.60781 11.4595 0.625 10.8001 0.625 10.0001C0.625 9.20012 1.60781 8.54075 1.80469 7.80325C2.00781 7.04075 1.49375 5.97825 1.87969 5.31106C2.27187 4.63293 3.45156 4.55168 4.00156 4.00168C4.55156 3.45168 4.63281 2.272 5.31094 1.87981C5.97813 1.49387 7.04062 2.00793 7.80312 1.80481C8.54062 1.60793 9.2 0.625122 10 0.625122C10.8 0.625122 11.4594 1.60793 12.1969 1.80481C12.9594 2.00793 14.0219 1.49387 14.6891 1.87981C15.3672 2.272 15.4484 3.45168 15.9984 4.00168C16.5484 4.55168 17.7281 4.63293 18.1203 5.31106C18.5063 5.97825 17.9922 7.04075 18.1953 7.80325C18.3922 8.54075 19.375 9.20012 19.375 10.0001Z" fill="#2568EF"/>
                           <path d="M12.7093 7.20637L9.14053 10.7751L7.29053 8.92668C6.88897 8.52512 6.2374 8.52512 5.83584 8.92668C5.43428 9.32824 5.43428 9.97981 5.83584 10.3814L8.43115 12.9767C8.82178 13.3673 9.45615 13.3673 9.84678 12.9767L14.1624 8.66106C14.564 8.25949 14.564 7.60793 14.1624 7.20637C13.7608 6.80481 13.1108 6.80481 12.7093 7.20637Z" fill="#FFFCEE"/>
                         </g>
                         <defs>
                           <clipPath id="clip0_13_1000">
                             <rect width="20" height="20" fill="white"/>
                           </clipPath>
                         </defs>
                       </svg>`
                       : ''
                     }
                   </p>
                   
                     </div>
                
                 <p class="mt-3 font-normal text-base text-[#171717B2] cardView">${blogs.others.views}<span class="text-sm"> views</span></p>
             </div>
               </div>
             </div>
           </div>    
     </div>
    `
    cardContainer.appendChild(div);
    });
   }
   else{
     
      const div = document.createElement('div');
    div.innerHTML = `
    <img class="mx-auto" src="images/Icon.png" alt="wrong">  
    <h1 class="mt-7 text-center text-2xl font-bold">Oops!! Sorry, There is no </br> content here</h1>
    `
    card2Container.appendChild(div)

    
   }
   

}

document.getElementById('Blog').addEventListener(('click'),function(){
    window.location.href="blog.html";
});

document.getElementById('sorting').addEventListener('click', function () {
  let array = [];

  const showCardView = document.getElementsByClassName('cardView');
  // console.log(showCardView)

  for (const view of showCardView) {
      const getViewsData = view.innerText;
      const getOnlyViews = parseFloat(getViewsData);
      const viewsParentElement = view.parentElement.parentElement.parentElement.parentElement
      // console.log(viewsParentElement)
      array.push({ card: viewsParentElement, views: getOnlyViews });

  }

  console.log(array)
  // const sortedarray = array.sort((a, b) => b.views - a.views);
  array.sort((a, b) => b.views - a.views);
  // console.log(sortedarray)

  const cardContainer = document.getElementById('card-container');

  cardContainer.innerHTML = '';

  for (const item of array) {
      console.log(item)
      cardContainer.appendChild(item.card);
  }
});
  

  


handlecategory();
handleCategoryId('1000');
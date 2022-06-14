<script>
export default {
  name: 'AppBlogs',
  data: () => ({
    blogs: [
      {
        id: '1',
        color: '#1F7087',
        src: 'https://cdn.shopify.com/s/files/1/0508/5147/9723/files/Homepage_Slider_AUG2016_Welcome12_1512x.jpg?v=1604934411',
        title: 'Beautifully Scented Plants for the Kitchen',
        subTitle: 'Top 10 Australian beaches',
        shortContent: 'Whitsunday Island, Whitsunday Islands',
        description: 'Houseplants are a simple way to transform your space, adding a touch of colour and life to your home. They\'re even good for you, as they reduce stress and improve air quality and can give a room a new lease of life. Adding a few plants can really brighten up utilitarian rooms like kitchens, and make daily tasks like dishwashing and cooking a little more pleasant. Growing your own herbs and window-sill salad ingredients is environmentally friendly, too. Did you know that nearly 72% of shoppers now take the environmental impact of their shopping choices into consideration when they purchase food and other groceries? Try these three beautifully scented plants in your kitchen:',
        author: 'Foster the People'
      },
      {
        id: '2',
        color: '#952175',
        src: 'https://img.freepik.com/free-photo/green-wall-mockup-with-green-plant-shelf3d-rendering_41470-4114.jpg?w=1380&t=st=1654439870~exp=1654440470~hmac=ff4d20770ede510a0b14ec572dac0b987eafd1a782f282b35f052e0d396604d2',
        title: 'The Best Wedding Gifts Are Green',
        subTitle: 'Top 10 Australian beaches',
        description: 'If you’re on the search for a meaningful wedding gift, look no further than a gift that grows! A special plant gift can serve as a unique way to remember a landmark occasion. With age, plants become stronger and more resilient—just like love! Plus, who wouldn’t adore some fresh greenery to liven up their home? Read on for our favorite wedding-inspired picks.',
        shortContent: 'Whitsunday Island, Whitsunday Islands',
        author: 'Ellie Goulding'
      }
    ]
  })
}
</script>

<template>
  <div class="main-content">
    <div class="app-color flex justify-center font-semibold underline text-3xl">
      Blogs
    </div>
    <div class="flex flex-wrap justify-center">
      <div v-for="(blog, index) in blogs" :key="index">
        <v-fade-transition :key="`blogs${blog.id}-${index}`">
          <BlogCard :data-source="blog" />
        </v-fade-transition>
      </div>
    </div>
  </div>
</template>

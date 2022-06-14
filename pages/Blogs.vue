<script>
export default {
  name: 'AppBlogs',
  data: () => ({
    blogs: [
      {
        color: '#1F7087',
        src: 'https://cdn.shopify.com/s/files/1/0508/5147/9723/files/Homepage_Slider_AUG2016_Welcome12_1512x.jpg?v=1604934411',
        title: 'Supermodel',
        subTitle: 'Top 10 Australian beaches',
        shortContent: 'Whitsunday Island, Whitsunday Islands',
        author: 'Foster the People'
      },
      {
        color: '#952175',
        src: 'https://img.freepik.com/free-photo/green-wall-mockup-with-green-plant-shelf3d-rendering_41470-4114.jpg?w=1380&t=st=1654439870~exp=1654440470~hmac=ff4d20770ede510a0b14ec572dac0b987eafd1a782f282b35f052e0d396604d2',
        title: 'Halcyon Days',
        subTitle: 'Top 10 Australian beaches',
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
        <BlogCard :data-source="blog" />
      </div>
    </div>
  </div>
</template>

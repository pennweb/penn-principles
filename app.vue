<template>
  <NuxtLayout>
    <Hero />
    <SectionArrow />
    <ContextSection
      :heading="'<span>Our</span><br>Principles'"
      :paragraph="'We asked “What does the world need from Penn?” The resulting principles are the essence of who we are. They are Penn’s enduring values and distinctive strengths. They are where we as a campus community stand.'"
    />
    <ControlsRail>
      <FixedMediaContext
        :numeral="'I'"
        :heading="'The Anchored University'"
        :list="'<li>Our exceptional and diverse people, communities, and campus are our anchor, the foundation of all we do, and they guide and propel Penn.</li><li>Being an excellent Philadelphia neighbor and global citizen is essential to Penn’s mission.</li>'"
        :image="{
          src: '/images/image_11.jpg',
          alt: 'graduating students at commencment ceremony throwing their caps.'
        }"
      />
      <FixedMediaContext
        :numeral="'II'"
        :heading="'The Interwoven University'"
        :list="'<li>The more ideas and people from all backgrounds we bring to the table—and the more interconnected and less siloed our community—the more rigorous, more resourceful, and more effective Penn is.</li><li>Leadership in interdisciplinary excellence distinguishes Penn.</li>'"
        :image="{
          src: '/images/image_2.jpeg',
          alt: 'students sitting in grass on campus.'
        }"
      />
      <FixedMediaContext
        :numeral="'III'"
        :heading="'The Inventive University'"
        :list="'<li>Penn is a powerhouse for breakthroughs in all fields.</li><li>Penn addresses great challenges and opportunities.</li>'"
        :image="{
          src: '/images/image_3.jpeg',
          alt: 'student adjusting a projects engineering.'
        }"
      />
      <FixedMediaContext
        :numeral="'IV'"
        :heading="'The Engaged University'"
        :list="'<li>Penn cultivates leaders who serve.</li><li>Penn seeks dialogue and collaboration across differences and divides.</li>'"
        :image="{
          src: '/images/image_9.jpeg',
          alt: 'staff at penn vet working dog center training dogs.'
        }"
      />
    </ControlsRail>
    <SectionArrow type="dark" />
    <ContextSection
      type="dark"
      :heading="'<span>Our</span><br>Practices'"
      :paragraph="'Our areas of practice directly support and strengthen Penn’s core educational mission. They will help us channel Penn’s excellence and its boundless creative energy to meet the needs of our time. These practices are meant to guide, not decide, our future course.'"
    />
    <Accordion
      :single="true"
      :items="[
        {
          bullet: 'A',
          image: {
            src: '/images/image_5.jpeg',
            alt: 'professor with experiments'
          },
          heading: 'Accelerate interdisciplinary pursuits',
          content: '<li>A cross-cutting University approach that spans boundaries to forge novel connections in teaching, research, and clinical practice to advance knowledge and improve lives. Expand our commitment to the power of curiosity-driven exploration across all fields of knowledge, from the arts and humanities to the sciences to the professions. Seek exponential growth in Penn’s interdisciplinary faculty support; even more inter-School teaching, projects, and programs; and rich opportunities for students and staff to pursue novel collaborations across a wide range of domains.</li><li>Champion the essential role of the arts and humanities at the core of the human endeavor.  They bring people together through deeper understanding of history, culture, social conditions, and empathy for others, and they foster problem-solving. We will seek new ways to strengthen and integrate them in all fields and amplify opportunities to explore Penn’s extraordinary repositories of culture and beauty on campus and beyond.</li><li>Continue to fuel Penn as a premier inventive powerhouse. From entrepreneurship to commercialization and tech transfer, Penn has established significant infrastructure to make this campus and city a destination for innovators. We will accelerate Penn as a premier powerhouse for translating knowledge into action and solutions.</li>'
        },
        {
          bullet: 'B',
          image: {
            src: '/images/image_6.jpg',
            alt: 'new penn university building'
          },
          heading: 'Lead on great challenges of our time',
          content: '<li>Climate: Every person at Penn and all that we do has some nexus to the existential challenge of climate change. We must, in an all-in University effort, do more. From leading energy science and policy across disciplines to designing and caring for the built environment, Penn will seek additional ways to support and recruit the best minds; fuel initiatives that advance understanding and promise solutions; and adopt institutional best practices for the sake of our future and our planet.</li><li>Health: The pandemic cast in sharp relief the urgency of Penn’s groundbreaking work in life sciences and health across schools and disciplines. To help ensure a healthier, safer global future, Penn will do even more to advance our health efforts. We will further cement both Penn and the region as an epicenter for groundbreaking research and teaching, translational discovery, and policy expertise in life sciences and public health. </li><li>Data: From big data to large language model-powered AI, technological advances offer the chance to unlock new understanding across a dizzying number of domains and at the same time may dramatically outpace society’s ability to assess and plan for the promises and consequences. Penn is poised to lead in data-driven research, teaching, and applications. We will also cultivate leading expertise on how society can develop and deploy powerful technologies beneficially and justly.</li><li>Democracy, trust, and truth: Position Penn as a global leader in driving conversations about and promoting democratic values and institutions. Build on signature homegrown strengths and exceptionally broad-ranging expertise to seek and defend truth.</li>'
        },
        {
          bullet: 'C',
          image: {
            src: '/images/image_7.jpeg',
            alt: 'LOVE statue on campus.'
          },
          heading: 'Grow opportunity and strengthen affinity',
          content: '<li>Recruit and support diverse and exceptional students, faculty, and staff with the widest range of backgrounds, experiences, and perspectives.</li><li>Undertake our campus planning to ensure design and function that serves its community for generations to come. Our physical plant should be state-of-the-art, sustainable, and thoughtfully improved to foster the interactions, experiences, and relationships that knit communities together.</li>'
        },
        {
          bullet: 'D',
          image: {
            src: '/images/image_1.jpeg',
            alt: 'low sunset on campus on pathway'
          },
          heading: 'Deepen connection with neighbors and the world',
          content: '<li>Excellent neighbor to West Philadelphia, our city, and region. Penn will pursue all that a collaborative urban institution and caring neighbor can do in this new era for cities everywhere. As one University, we will more centrally convene and coordinate all the work we do in meaningful partnership with our West Philadelphia neighbors, the city, and the region. We will leverage our academic expertise to shed light on, and seek solutions to, pressing urban challenges.</li><li>Model global citizen. At a time when the tectonic plates of the international community are shifting rapidly, what is a leading American university’s role in the world? By building on existing partnerships around the world and further investing in global research, teaching, and learning on campus, Penn will help define what the next decade requires of a leading global university.</li>'
        },
        {
          bullet: 'E',
          image: {
            src: '/images/image_10.jpg',
            alt: 'group at penn vote campaign'
          },
          heading: 'Foster leadership and service',
          content: '<li>Cultivate leaders who serve. The world needs leaders now more than ever—discerning leaders who have knowledge, vision, creativity, and, above all, a commitment to making a difference for others and for the planet. Penn has long prepared students to be leaders. For the future, we will build on existing resources and initiate new ways of cultivating service-minded leadership among our students, and also our faculty and staff.</li><li>Best-in-class instruction. Producing knowledge and transmitting that knowledge to the next generation is the very core of the Penn experience. We will continually seek to advance state-of-the-art and innovative instruction to best deliver on our mission of preparing future generations to think critically and lead effectively. </li><li>Convene, communicate, and collaborate across divisions and divides.</li>'
        }
      ]"
    />
    <Footer />
  </NuxtLayout>
</template>

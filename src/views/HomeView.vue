<template>
  <div>
    <HeroSection />
    <FeaturesSection />
    <HowItWorksSection />
    <DownloadSection />
  </div>
</template>

<script>
import HeroSection from '../components/sections/HeroSection.vue'
import FeaturesSection from '../components/sections/FeaturesSection.vue'
import HowItWorksSection from '../components/sections/HowItWorksSection.vue'
import DownloadSection from '../components/sections/DownloadSection.vue'

export default {
  name: 'HomeView',
  components: {
    HeroSection,
    FeaturesSection,
    HowItWorksSection,
    DownloadSection
  }
}
</script>
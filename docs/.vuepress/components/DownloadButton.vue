<script setup>
import { ref } from 'vue';

// Props for the component
const props = defineProps({
  filePath: { type: String, required: true },  // Path to the file
  label: { type: String, default: 'Download CV' }  // Button text
});

// Log the label to the console
console.log(props.label);

// Method to handle the download
const downloadCV = () => {
  const link = document.createElement('a');
  link.href = props.filePath;
  link.download = props.filePath.split('/').pop();  // Use the filename from the path
  document.body.appendChild(link);  // Append link to the body
  link.click();  // Trigger the download
  document.body.removeChild(link);  // Clean up the link
};
</script>

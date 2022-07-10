<script>
  import {ALERT_TYPE, alertType, alertMessage, displayALert} from './alertStore'

  function onSubmit(e) {
		const formData = new FormData(e.target);
    const message  = formData.get("message");

    if (message.length >= 8) {
      displayALert(`message correctly for: ${message}`, ALERT_TYPE.SUCCESS, 9000);
    } else if(message.length === 0) {
      displayALert('write message', ALERT_TYPE.INFO, 9000);
    } else {
      displayALert(`short message for: ${message}`, ALERT_TYPE.DANGER, 9000);
    }
	}
</script>

<form on:submit|preventDefault={onSubmit} class="flex justify-center px-4 py-8">
  <div class="flex flex-col gap-4">
    <label for="message" class="text-center">Message</label>
    <input  type="text" id="message" name="message" 
      class="border-2 border-blue-400 rounded-md outline-blue-600 caret-blue-600 p-2 text-blue-800">
    <button class="text-white text-xl bg-blue-700 p-2 rounded-md">Submit</button>
  </div>
</form>
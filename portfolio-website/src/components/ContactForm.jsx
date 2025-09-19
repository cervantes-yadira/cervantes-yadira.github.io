export default function ContactForm() {
  return (
    <form>
      <label for='name'>Name</label>
      <input id='name' type='text' placeholder='Name'></input>

      <label for='email'>Email</label>
      <input id='email' type='email' placeholder='Email'></input>

      <label for='message'>Message</label>
      <textarea id='message' rows={6} placeholder='Message'></textarea>

      <button type='button'>Send!</button>
    </form>
  )
}
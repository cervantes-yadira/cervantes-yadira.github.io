export default function ContactForm() {
  return (
    <form>
      <div className="flex flex-btwn">
        <label for='name'>Name</label>
        <input id='name' type='text' placeholder='Name'></input>
      </div>
      <div className="flex flex-btwn">
        <label for='email'>Email</label>
        <input id='email' type='email' placeholder='Email'></input>
      </div>
      <div className="flex flex-btwn">
        <label for='message'>Message</label>
        <textarea className="block" id='message' rows={6} placeholder='Message'></textarea>
      </div>
      <div className="flex flex-end">
        <button className="form-btn" type='button'>Send!</button>
      </div>
    </form>
  )
}
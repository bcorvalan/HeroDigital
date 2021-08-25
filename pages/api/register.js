
export default function handler(req, res) {
  if (req.method === 'POST') {
   
    const requestData = req.body

    if(!requestData.triggerError) { 
      res.status(200).json({  message: "Thank you. You are now subscribed."})
    } else {
      res.status(400).json({message: "Invalid Subscription request."})
    }
  } else {
    res.status(405).json({ name: 'Method not allowed' })
  }
}

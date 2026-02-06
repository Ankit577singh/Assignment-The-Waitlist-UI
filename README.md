# Waitlist UI – Internal Tools Access

This is a simple single page waitlist form made using Next.js and Tailwind CSS.  
In this page user can request access to internal tools by giving business email and a reason.

Main purpose of this assignment was to follow UI rules and validation rules and handle everything from frontend only.

---

## What I Built

I created one page which has:
- Grey background
- One white card in center
- Title "Internal Tools Access"
- One email input
- One textarea for reason
- One submit button with text "Request Access Token"

After user submit valid form, the form is removed and user sees message: "You have been added to the queue."


---

## How I Did Email Validation

I made one JavaScript function for email validation.

What I did:
- Used regex to check email format. 
- Took domain part using split("@").
- Created array of blocked domains like mail.com, hotmail.com etc.
- If email domain is in blocked list then I show error:
  "Business emails only."

I used simple if else conditions.

---

## How I Did Reason Validation

I created another function for reason field.

- Checked if input is empty.
- Checked if characters are less than 20.
- If less than 20 then I show error.
- Also showing character count to user.
---

## Success State
When email and reason both are valid:
- I change a state variable.
- Form gets hidden.
- Success message is shown.

Everything handled using React useState hook.

---

## Tech Stack

- Next.js (App Router)
- JavaScript
- Tailwind CSS
- vercel for deployment

---

## One Problem I Faced and How I Fixed It

At starting my Tailwind CSS styles were not working.

First I only changed small things but it was not fixed.  
Then I replaced the full configuration code and globals.css file properly.

After that I restarted the dev server and Tailwind CSS started working fine.

---

## Live Site

https://the-waitlist-ui.vercel.app/

---

## GitHub Repository
https://github.com/Ankit577singh/Assignment-The-Waitlist-UI
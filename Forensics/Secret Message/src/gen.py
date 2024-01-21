from fpdf import FPDF

pdf = FPDF()

pdf.add_page()

pdf.set_font("Arial", size=12)

pdf.cell(200, 10, txt="Confidential Document", ln=True, align='C')

pdf.cell(200, 10, txt="TRANSCRIPT: A Very Private Conversation", ln=True, align='C')
pdf.ln(10)

convo = """
Person 1: "So, have you reviewed the latest security measures?"
Person 2: "I have. The team's done a thorough job this time."
Person 1: "Especially after the last breach, we couldn't take any chances."
Person 2: "Absolutely. The new encryption protocols should prevent similar incidents."
Person 1: "What about the insider threat? Any measures against that?"
Person 2: "Yes, they've implemented strict access controls and regular audits."
Person 1: "Good to hear. By the way, how's the CTF challenge coming along?"
Person 2: "Oh, it's going great. We've got some tricky puzzles this time."
Person 1: "Just make sure the flag is well-protected. We don't want a repeat of last time."
Person 2: "Definitely not. The flag 'uoftctf{fired_for_leaking_secrets_in_a_pdf}' is securely embedded."
Person 1: "Great. But remember, that's between us."
Person 2: "Of course. Confidentiality is key in these matters."
Person 1: "Alright, I trust your discretion. Let's keep it under wraps."
Person 2: "Agreed. We'll debrief the team about general security, but specifics stay with us."
Person 1: "Sounds like a plan. Let's meet next week for another update."
Person 2: "Will do. Take care until then."
"""

pdf.multi_cell(0, 10, txt=convo)

redaction_x =90
redaction_y = 140
redaction_width = 83
redaction_height = 10
pdf.set_fill_color(0, 0, 0)
pdf.rect(redaction_x, redaction_y, redaction_width, redaction_height, 'F')

pdf_file_path = './secret.pdf'
pdf.output(pdf_file_path)

# then we run it through https://online-pdf-no-copy.com/online-pdf-no-copy/


from flask import Blueprint, request, render_template, make_response, redirect, url_for, render_template_string
from utils import create_jwt, decode_jwt

web = Blueprint('web', __name__, template_folder='templates', static_folder='static')

@web.route('/')
def home():
    if request.cookies.get('auth_token'):
        return redirect(url_for('web.dashboard'))
    return redirect(url_for('web.register'))

@web.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        if not username.isalnum():
            return render_template('register.html', title="Register", error="Username must be alphanumeric.")
        token = create_jwt(username)
        response = make_response(redirect(url_for('web.dashboard')))
        response.set_cookie('auth_token', token)
        return response
    return render_template('register.html', title="Register")

@web.route('/dashboard')
def dashboard():
    if request.args:
        return "Whoa there bucko, did you forget I'm not a web developer? I don't know how to handle parameters yet!"
    
    token = request.cookies.get('auth_token')
    user_info = decode_jwt(token)
    print(user_info)
    if not user_info:
        return redirect(url_for('web.register'))
    
    if not str(user_info['username']).isascii():
        return f"It's not a pyjail XD. ASCII characters only please!"

    restricted_stuff = [',', '[', ']', '"', "'", '_', '\\','/','headers','url','path','data','json','args','cookies','files','form','flag', '%', 'os','system','popen','sys','module','mro','class','base','getitem','subprocess','application','config','list','dict','global','builtins','import','join','first','last','reverse','lower','upper','items','format']
    
    blocked = False
    
    found_strings = []
    
    for blacklisted in restricted_stuff:
        if blacklisted in str(user_info['username']):
            found_strings.append(blacklisted)
            blocked = True
    
    if blocked:
        title_text = "BLOCKED"
        content_html = f'''<div class="error-message">My very expensive firewall detected a malicious hacking attempt. Pls stop :(
        <br>Malicious stuff: {found_strings}</br>
        </div>'''
    else:
        title_text = f"Welcome, {user_info['username']}"
        content_html = "<p>This is my first app! I'm not much a web developer though, so there isn't much to do here, sorry!</p>"

    logout_form_html = '''
    <form action="{{ url_for('web.logout') }}" method="post">
        <input type="submit" value="Logout">
    </form>
    '''

    dashboard_template = f'''
    {{% extends "layout.html" %}}
    {{% block content %}}
    <div class="form-container">
    <h1 class="welcome-text">{title_text}</h1> 
    {content_html}
    {logout_form_html}
    </div>
    {{% endblock %}}
    '''
    return render_template_string(dashboard_template)



@web.route('/logout', methods=['POST'])
def logout():
    response = make_response(redirect(url_for('web.register')))
    response.set_cookie('auth_token', '', expires=0)
    return response



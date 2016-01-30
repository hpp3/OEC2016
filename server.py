from flask import Flask, Response, make_response, jsonify, send_from_directory

app = Flask(__name__, static_url_path='/')


@app.route('/js/<path:path>')
def send_js(path):
    return send_from_directory('js', path)


@app.route('/css/<path:path>')
def send_css(path):
    return send_from_directory('css', path)


@app.route('/')
def root():
    return make_response(open('index.html').read())


if __name__ == '__main__':
    app.run(debug=True)

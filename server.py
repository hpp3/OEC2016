import json

from flask import Flask, Response, make_response, jsonify, send_from_directory

app = Flask(__name__, static_url_path='/')


@app.route('/js/<path:path>')
def send_js(path):
    return send_from_directory('js', path)

@app.route('/images/<path:path>')
def send_images(path):
    return send_from_directory('images', path)

@app.route('/css/<path:path>')
def send_css(path):
    return send_from_directory('css', path)


@app.route('/')
def root():
    return make_response(open('index.html').read())


@app.route('/stories')
def get_stories():
    stories = []
    with open('tommy', 'r') as f:
        story = ''
        for line in f:
            if line == '===\n':
                stories.append(story)
                story = ''
            elif line != '\n':
                story += line

    return Response(json.dumps(stories),  mimetype='application/json')


@app.route('/code_templates')
def get_code_templates():
    templates = []
    with open('code_template', 'r') as f:
        template = ''
        for line in f:
            if line == '===\n':
                templates.append(template)
                template = ''
            elif line != '\n':
                template += line

    return Response(json.dumps(templates),  mimetype='application/json')


if __name__ == '__main__':
    app.run(debug=True)

Raidar - AI Detection via Rewriting
Welcome to the Raidar (geneRative AI Detection viA Rewriting) repository! This repository contains the code and datasets for our innovative system designed to identify whether text has been written by a human or generated by AI, specifically large language models (LLMs) like ChatGPT.

Table of Contents
Introduction
Installation
Usage
Demo
Contributing
License
Acknowledgements
Contact
Introduction
Raidar is a cutting-edge tool developed by Professors Junfeng Yang and Carl Vondrick at Columbia University. The system leverages a unique characteristic of LLMs known as "stubbornness," where LLMs are more likely to alter human-written text than AI-generated text. This repository includes all the necessary materials to understand, replicate, and extend our research.

Installation
To get started with Raidar, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/raidar.git
cd raidar
Install the required dependencies:

bash
Copy code
pip install -r requirements.txt
Usage
You can use Raidar to detect AI-generated text by following these steps:

Prepare your text file: Ensure your input text is stored in a .txt file.

Run the Raidar script:

bash
Copy code
python raidar.py --input your_text_file.txt --output result.txt
Review the output: The result will indicate whether the text is likely human-written or AI-generated based on the number of modifications made by the LLM.

Demo
To see Raidar in action, visit our demo website. The website includes both voice and text detection demos. You can also access the paper overview, ethical considerations, and a contact form for further inquiries.

Contributing
We welcome contributions from the community. To contribute:

Fork the repository.
Create a new branch for your feature or bugfix.
Commit your changes and push them to your forked repository.
Create a pull request with a detailed description of your changes.
License
This research is provided for academic and research purposes only. The code and datasets are released under the MIT License.

Acknowledgements
We thank Columbia University and the broader research community for their support. This work will be presented at the International Conference on Learning Representations (ICLR) in Vienna, Austria, May 7-11, 2024.

We hope Raidar will contribute significantly to the field of AI-generated text detection and inspire further research and development. Thank you for your interest and support!






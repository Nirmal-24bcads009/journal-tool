// Utility functions
function formatCodeForPreview(text) {
    const div = document.createElement('div');
    div.textContent = text;
    let escapedText = div.innerHTML;
    escapedText = escapedText.replace(/\t/g, '  ');
    const lines = escapedText.split('\n').filter(line => line.trim().length > 0);
    if (lines.length === 0) return '';
    const minIndent = lines.reduce((min, line) => {
        const leadingSpaces = line.match(/^\s*/)?.[0].length || 0;
        return Math.min(min, leadingSpaces);
    }, Infinity);
    return escapedText.split('\n').map(line => {
        if (line.length > minIndent) {
            return line.substring(minIndent);
        }
        return line;
    }).join('\n');
}

function formatCodeForDownload(text) {
    return text.replace(/\t/g, '    ');
}

function showStatus(message) {
    const statusContainer = document.getElementById('statusContainer');
    statusContainer.innerHTML = `<div class="status-message">${message}</div>`;
}

function showError(message) {
    const errorContainer = document.getElementById('errorContainer');
    errorContainer.innerHTML = `<div class="error-message">${message}</div>`;
}

function clearMessages() {
    document.getElementById('statusContainer').innerHTML = '';
    document.getElementById('errorContainer').innerHTML = '';
}

function dataURLToBlob(dataURL) {
    try {
        const parts = dataURL.split(',');
        if (parts.length !== 2) {
            throw new Error('Invalid data URL format');
        }
        const header = parts[0];
        const data = parts[1];
        const contentTypeMatch = header.match(/data:([^;]+)/);
        const contentType = contentTypeMatch ? contentTypeMatch[1] : 'application/octet-stream';
        const isBase64 = header.includes('base64');
        if (isBase64) {
            const binaryString = atob(data);
            const bytes = new Uint8Array(binaryString.length);
            for (let i = 0; i < binaryString.length; i++) {
                bytes[i] = binaryString.charCodeAt(i);
            }
            return new Blob([bytes], { type: contentType });
        } else {
            const decodedData = decodeURIComponent(data);
            return new Blob([decodedData], { type: contentType });
        }
    } catch (error) {
        console.error('Error converting data URL to blob:', error);
        throw new Error('Failed to convert image data');
    }
}

const studentsData = [
    { id: '24BCADS001', name: 'ADGADE HARSHADA' }, { id: '24BCADS002', name: 'AHIR DIYA' }, { id: '24BCADS003', name: 'BHAKHATIYARPURE SAHIL' }, { id: '24BCADS005', name: 'CHANDOLE DARSHAN' }, { id: '24BCADS006', name: 'CHAUDHARI CHIRAG' }, { id: '24BCADS007', name: 'CHAUDHARI MARMIKKUMAR' }, { id: '24BCADS008', name: 'CHAUDHARI NAITIK' }, { id: '24BCADS009', name: 'CHAUDHARI NIRMALBHAI' }, { id: '24BCADS010', name: 'CHAUDHARI SONU' }, { id: '24BCADS011', name: 'CHAUDHARI VANSH' }, { id: '24BCADS012', name: 'CHAUDHARI YASHKUMAR' }, { id: '24BCADS013', name: 'CHAUHAN BHAKTI' }, { id: '24BCADS014', name: 'CHAUHAN BHUMIBEN' }, { id: '24BCADS015', name: 'CHAUHAN NIKUNJBHAI' }, { id: '24BCADS016', name: 'CHAUHAN PARTH' }, { id: '24BCADS017', name: 'DALAL PRATHAM' }, { id: '24BCADS018', name: 'DAS PURNIMA' }, { id: '24BCADS022', name: 'DESAI POORVABEN' }, { id: '24BCADS023', name: 'DHANGAR JAYKUMAR' }, { id: '24BCADS024', name: 'DHARIWAL AAKANSHA' }, { id: '24BCADS025', name: 'DHIMMAR MAHI' }, { id: '24BCADS026', name: 'DHOLE NEHA' }, { id: '24BCADS027', name: 'DOBARIYA YASHVI' }, { id: '24BCADS028', name: 'DOSHI PARTHKUMAR' }, { id: '24BCADS029', name: 'GAMIT TEJAS' }, { id: '24BCADS030', name: 'GANDHI KRISHNA' }, { id: '24BCADS031', name: 'GARASHIYA ANKUR' }, { id: '24BCADS032', name: 'GAUN MITKUMAR' }, { id: '24BCADS033', name: 'GHODASARA JENI' }, { id: '24BCADS034', name: 'HALPATI NILKUMAR' }, { id: '24BCADS035', name: 'JADAV ROHAN' }, { id: '24BCADS036', name: 'KAKULIT DOYAL' }, { id: '24BCADS037', name: 'KALAL YASH' }, { id: '24BCADS038', name: 'KANTHARIYA SAHILKUMAR' }, { id: '24BCADS039', name: 'MOHMAD AAKIL' }, { id: '24BCADS040', name: 'KEVAT MEHULBHAI' }, { id: '24BCADS041', name: 'LAKHARA HIMANSHU' }, { id: '24BCADS042', name: 'MACHHI KEVINKUMAR' }, { id: '24BCADS043', name: 'MAHYAVANSHI DHRUVKUMAR' }, { id: '24BCADS044', name: 'MAISURIYA DIYA' }, { id: '24BCADS045', name: 'MAJHI SUMITKUMAR' }, { id: '24BCADS046', name: 'MAYHAVANSHI VIVEK' }, { id: '24BCADS047', name: 'MEGHAT SHREYA' }, { id: '24BCADS048', name: 'MEMAN ABDULRAHMAN' }, { id: '24BCADS049', name: 'MISTRY DARSHANKUMAR' }, { id: '24BCADS050', name: 'MISTRY JAY' }, { id: '24BCADS051', name: 'MISTRY NENCY' }, { id: '24BCADS052', name: 'MISTRY RUSHIKUMAR' }, { id: '24BCADS053', name: 'MISTRY SHUCHI' }, { id: '24BCADS054', name: 'MISTRY SNEHA' }, { id: '24BCADS055', name: 'MISTRY TISHA' }, { id: '24BCADS056', name: 'MORI DHRUVILKUMAR' }, { id: '24BCADS057', name: 'MULTANI RUMANA' }, { id: '24BCADS058', name: 'MULTANI SANIYA' }, { id: '24BCADS059', name: 'PAGHADAL JIGARKUMAR' }, { id: '24BCADS060', name: 'PANCHAL BHUMI' }, { id: '24BCADS061', name: 'PANCHAL DIYA' }, { id: '24BCADS062', name: 'PANCHAL FENI' }, { id: '24BCADS063', name: 'PANCHAL HENI' }, { id: '24BCADS064', name: 'PANCHAL MEET' }, { id: '24BCADS065', name: 'PANCHAL POOJA' }, { id: '24BCADS066', name: 'PANCHAL RUDRAKUMAR' }, { id: '24BCADS067', name: 'PANCHAL SHIVAM' }, { id: '24BCADS068', name: 'PANCHAL SHRUTIBEN' }, { id: '24BCADS069', name: 'PANCHAL STUTY' }, { id: '24BCADS070', name: 'PANCHOLI HET' }, { id: '24BCADS071', name: 'PATANVADIYA RIYABEN' }, { id: '24BCADS072', name: 'PATEL AMI' }, { id: '24BCADS073', name: 'PATEL ARCHI' }, { id: '24BCADS074', name: 'PATEL BHUMI' }, { id: '24BCADS075', name: 'PATEL DAX' }, { id: '24BCADS076', name: 'PATEL DARSHAN' }, { id: '24BCADS077', name: 'PATEL DEVANSHIKUMARI' }, { id: '24BCADS078', name: 'PATEL DEVANSHU' }, { id: '24BCADS079', name: 'PATEL DHRUVI' }, { id: '24BCADS080', name: 'PATEL FENIL' }, { id: '24BCADS081', name: 'PATEL HENIL' }, { id: '24BCADS084', name: 'PATEL KASHISH' }, { id: '24BCADS085', name: 'PATEL KHUSHI' }
];

const questionsData = [
    { journal: 1, question: '1.Write an HTML code for Timetable using external CSS.' },
    { journal: 1, question: '2.Write an HTML code for Registration Form using inline CSS.' },
    { journal: 1, question: '3.Write an HTML code for Resume using internal CSS.' }
];

// Global variables
let filePairs = [];
let selectedStudent = {};
let selectedQuestion = {};
let fileCounter = 0;

// DOM elements
const studentIdInput = document.getElementById('studentId');
const studentNameInput = document.getElementById('studentName');
const journalNumberSelect = document.getElementById('journalNumber');
const questionSelect = document.getElementById('questionSelect');
const generateBtn = document.getElementById('generateBtn');
const downloadWordBtn = document.getElementById('downloadWordBtn');
const downloadPdfBtn = document.getElementById('downloadPdfBtn');
const orderPrintBtn = document.getElementById('orderPrintBtn');
const journalPreviewDiv = document.getElementById('journalPreview');
const previewContainer = document.getElementById('previewContainer');
const addFileBtn = document.getElementById('addFileBtn');
const fileUploadsArea = document.getElementById('fileUploadsArea');
const studentIdList = document.getElementById('studentIdList');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
    populateStudentDatalist();
    populateJournalNumbers();
    addFilePair();
});

function setupEventListeners() {
    studentIdInput.addEventListener('input', handleStudentIdChange);
    studentNameInput.addEventListener('input', checkFormValidity);
    journalNumberSelect.addEventListener('change', handleJournalNumberChange);
    questionSelect.addEventListener('change', checkFormValidity);
    addFileBtn.addEventListener('click', addFilePair);
    generateBtn.addEventListener('click', generatePreview);
    downloadWordBtn.addEventListener('click', downloadWord);
    downloadPdfBtn.addEventListener('click', downloadPdf);
    orderPrintBtn.addEventListener('click', () => {
        alert('Please download the PDF and use your system\'s print function.');
    });
}

function populateStudentDatalist() {
    studentsData.forEach(student => {
        const option = document.createElement('option');
        option.value = student.id;
        studentIdList.appendChild(option);
    });
}

function populateJournalNumbers() {
    const journals = [...new Set(questionsData.map(q => q.journal))].sort((a, b) => a - b);
    journalNumberSelect.innerHTML = '<option value="">Select Journal Number</option>';
    journals.forEach(journal => {
        const option = document.createElement('option');
        option.value = journal;
        option.textContent = `Journal ${journal}`;
        journalNumberSelect.appendChild(option);
    });
}

function handleStudentIdChange(event) {
    const selectedId = event.target.value;
    const student = studentsData.find(s => s.id === selectedId);
    studentNameInput.value = student ? student.name.toUpperCase() : '';
    checkFormValidity();
}

function handleJournalNumberChange(event) {
    const journalNumber = parseInt(event.target.value);
    questionSelect.innerHTML = '<option value="">Select Question</option>';
    questionSelect.disabled = true;
    if (journalNumber) {
        const journalQuestions = questionsData.filter(q => parseInt(q.journal) === journalNumber);
        questionSelect.disabled = false;
        journalQuestions.forEach(question => {
            const option = document.createElement('option');
            option.value = JSON.stringify(question);
            option.textContent = question.question;
            questionSelect.appendChild(option);
        });
    } else {
         questionSelect.innerHTML = '<option value="">Select a journal first</option>';
    }
    checkFormValidity();
}

function addFilePair() {
    const pairId = fileCounter++;
    const pairDiv = document.createElement('div');
    pairDiv.classList.add('file-pair');
    pairDiv.innerHTML = `
        <div class="form-group">
            <div class="file-upload-area" id="codeUploadArea-${pairId}">
                <div class="upload-icon">📄</div>
                <div class="upload-text">Drop or Click to Upload Code File</div>
                <input type="file" id="codeInput-${pairId}" class="file-input" accept="text/html,.html,text/css,.css">
            </div>
        </div>
        <div class="form-group">
            <div class="file-upload-area" id="screenshotUploadArea-${pairId}">
                <div class="upload-icon">🖼️</div>
                <div class="upload-text">Drop or Click to Upload Screenshot (Optional)</div>
                <input type="file" id="screenshotInput-${pairId}" class="file-input" accept="image/*">
            </div>
        </div>
    `;
    fileUploadsArea.appendChild(pairDiv);
    setupFileDragAndDrop(document.getElementById(`codeInput-${pairId}`), document.getElementById(`codeUploadArea-${pairId}`), 'Code', pairId);
    setupFileDragAndDrop(document.getElementById(`screenshotInput-${pairId}`), document.getElementById(`screenshotUploadArea-${pairId}`), 'Screenshot', pairId);
}

function setupFileDragAndDrop(fileInput, uploadArea, type, pairId) {
    uploadArea.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = e => {
                const fileData = { name: file.name, content: e.target.result, type: file.type };
                let pair = filePairs.find(p => p.id === `file-pair-${pairId}`);
                if (!pair) {
                    pair = { id: `file-pair-${pairId}`, code: null, screenshot: null };
                    filePairs.push(pair);
                }
                if (type === 'Code') pair.code = fileData;
                else pair.screenshot = fileData;
                uploadArea.classList.add('file-selected');
                uploadArea.querySelector('.upload-text').textContent = file.name;
                checkFormValidity();
            };
            if (type === 'Code') reader.readAsText(file);
            else reader.readAsDataURL(file);
        }
    });
    ['dragover', 'dragleave', 'drop'].forEach(eventName => {
        uploadArea.addEventListener(eventName, e => {
            e.preventDefault();
            uploadArea.classList.toggle('dragover', eventName === 'dragover');
            if (eventName === 'drop' && e.dataTransfer.files.length === 1) {
                fileInput.files = e.dataTransfer.files;
                fileInput.dispatchEvent(new Event('change'));
            }
        });
    });
}

function checkFormValidity() {
    const hasCodeFiles = filePairs.some(pair => pair.code !== null);
    const isValid = studentIdInput.value.trim() && studentNameInput.value.trim() && journalNumberSelect.value && questionSelect.value && hasCodeFiles;
    generateBtn.disabled = !isValid;
    selectedQuestion = questionSelect.value ? JSON.parse(questionSelect.value) : {};
}

function generatePreview() {
    clearMessages();
    selectedStudent = {
        id: studentIdInput.value.trim(),
        name: studentNameInput.value.trim().toUpperCase()
    };

    if (!selectedStudent.id || !selectedStudent.name) {
        showError("Student ID and Name are required.");
        return;
    }

    let allContent = '';
    filePairs.forEach(pair => {
        if (pair.code) {
            const formattedCode = formatCodeForPreview(pair.code.content);
            allContent += `<div class="journal-content"><div class="journal-filename">${pair.code.name}</div><div class="journal-code"><pre style="font-family:'Times New Roman', serif; font-size:12pt; white-space: pre-wrap; word-wrap: break-word;">${formattedCode}</pre></div></div>`;
        }
        if (pair.screenshot) {
            allContent += `<div class="journal-content journal-output"><div class="journal-output-label">OUTPUT:</div><img src="${pair.screenshot.content}" alt="Output Screenshot" style="max-width:100%; height: auto; border:1px solid #000;"></div>`;
        }
    });

    const journalHeaderHtml = `<div class="journal-header"><div class="journal-line1"><span>${selectedStudent.id}</span><span>JOURNAL-${selectedQuestion.journal}</span><span>${selectedStudent.name}</span></div><div class="journal-question">${selectedQuestion.question}</div></div>`;
    journalPreviewDiv.innerHTML = journalHeaderHtml + allContent;
    previewContainer.style.display = 'block';
    downloadWordBtn.disabled = false;
    downloadPdfBtn.disabled = false;
    orderPrintBtn.disabled = false;
    previewContainer.scrollIntoView({ behavior: 'smooth' });
}

async function downloadWord() {
    try {
        clearMessages();
        showStatus('Generating Word document... Please wait.');
        downloadWordBtn.disabled = true;

        selectedStudent = {
            id: studentIdInput.value.trim(),
            name: studentNameInput.value.trim().toUpperCase()
        };
        
        const lastThreeDigits = selectedStudent.id.slice(-3);
        const journalNumber = selectedQuestion.journal;
        const questionNumber = selectedQuestion.question.substring(0, 1);
        const newFilenameBase = `${lastThreeDigits}_j${journalNumber}_${questionNumber}`;

        const { Document, Packer, Paragraph, TextRun, AlignmentType, PageBreak, BorderStyle, Table, TableRow, TableCell, WidthType, ImageRun, Footer, PageNumber, PageBorderDisplay } = docx;
        const content = [];
        const margin = 720;

        const headerTable = new Table({
            rows: [ new TableRow({ children: [
                new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: selectedStudent.id, font: 'Times New Roman', size: 28 })], alignment: AlignmentType.LEFT })], width: { size: 33, type: WidthType.PERCENTAGE }, margins: { top: 0, bottom: 0, left: 0, right: 0 } }),
                new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: `JOURNAL-${selectedQuestion.journal}`, font: 'Times New Roman', size: 28 })], alignment: AlignmentType.CENTER })], width: { size: 34, type: WidthType.PERCENTAGE }, margins: { top: 0, bottom: 0, left: 0, right: 0 } }),
                new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: selectedStudent.name, font: 'Times New Roman', size: 28 })], alignment: AlignmentType.RIGHT })], width: { size: 33, type: WidthType.PERCENTAGE }, margins: { top: 0, bottom: 0, left: 0, right: 0 } })
            ] }) ],
            width: { size: 100, type: WidthType.PERCENTAGE },
            borders: { top: { style: BorderStyle.NONE, size: 0 }, bottom: { style: BorderStyle.NONE, size: 0 }, left: { style: BorderStyle.NONE, size: 0 }, right: { style: BorderStyle.NONE, size: 0 }, insideHorizontal: { style: BorderStyle.NONE, size: 0 }, insideVertical: { style: BorderStyle.NONE, size: 0 } }
        });
        content.push(headerTable);
        content.push(new Paragraph({ children: [new TextRun({ text: selectedQuestion.question, font: 'Times New Roman', size: 28, bold: true })], spacing: { before: 240, after: 240 } }));

        for (let i = 0; i < filePairs.length; i++) {
            const pair = filePairs[i];
            if (i > 0) content.push(new Paragraph({ children: [new PageBreak()] }));
            if (pair.code) {
                content.push(new Paragraph({ children: [new TextRun({ text: pair.code.name, font: 'Times New Roman', size: 28 })], spacing: { before: 240, after: 240 } }));
                const formattedCodeLines = formatCodeForDownload(pair.code.content).split('\n');
                formattedCodeLines.forEach(line => content.push(new Paragraph({
                    children: [new TextRun({ text: line || ' ', font: 'Times New Roman', size: 24 })],
                    spacing: { line: 312 },
                    indent: { left: 720 }
                })));
            }
            if (pair.screenshot) {
                if (pair.code) content.push(new Paragraph({ children: [new PageBreak()] }));
                content.push(new Paragraph({ children: [new TextRun({ text: 'OUTPUT:', font: 'Times New Roman', size: 28, bold: true })], alignment: AlignmentType.CENTER, spacing: { before: 240, after: 240 } }));
                try {
                    const img = new Image();
                    img.src = pair.screenshot.content;
                    await new Promise((resolve, reject) => { img.onload = resolve; img.onerror = reject; });
                    const maxWidth = 550;
                    const imgRatio = img.width / img.height;
                    let targetWidth = img.width > maxWidth ? maxWidth : img.width;
                    let targetHeight = targetWidth / imgRatio;
                    const imageBlob = dataURLToBlob(pair.screenshot.content);
                    const arrayBuffer = await imageBlob.arrayBuffer();
                    const imageRun = new ImageRun({ data: new Uint8Array(arrayBuffer), transformation: { width: targetWidth, height: targetHeight } });
                    content.push(new Paragraph({ children: [imageRun], alignment: AlignmentType.CENTER, spacing: { before: 120, after: 240 } }));
                } catch (imageError) {
                    console.warn('Error processing image for Word doc:', imageError);
                    content.push(new Paragraph({ children: [new TextRun({ text: `[Image: ${pair.screenshot.name} - Error]`, font: 'Times New Roman', size: 24, italics: true, color: '666666' })], alignment: AlignmentType.CENTER }));
                }
            }
        }

        const doc = new Document({
            sections: [{
                properties: {
                    page: {
                        size: { width: 11906, height: 16838 },
                        margin: { top: margin, right: margin, bottom: margin, left: margin },
                        borders: {
                            pageBorders: {
                                display: PageBorderDisplay.ALL_PAGES,
                                top: { style: BorderStyle.SINGLE, size: 16, color: "000000" },
                                bottom: { style: BorderStyle.SINGLE, size: 16, color: "000000" },
                                left: { style: BorderStyle.SINGLE, size: 16, color: "000000" },
                                right: { style: BorderStyle.SINGLE, size: 16, color: "000000" },
                            },
                        },
                    },
                },
                footers: {
                    default: new Footer({
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        children: ["Page ", PageNumber.CURRENT],
                                        font: "Times New Roman",
                                        size: 20
                                    }),
                                ],
                            }),
                        ],
                    }),
                },
                children: content,
            }],
        });
        const blob = await Packer.toBlob(doc);
        saveAs(blob, `${newFilenameBase}.docx`);
        showStatus('Word document downloaded successfully!');
    } catch (error) {
        console.error('Error generating Word document:', error);
        showError(`Error generating document: ${error.message}.`);
    } finally {
        downloadWordBtn.disabled = false;
    }
}

async function downloadPdf() {
    try {
        clearMessages();
        showStatus('Generating PDF document... Please wait.');
        downloadPdfBtn.disabled = true;
        
        selectedStudent = {
            id: studentIdInput.value.trim(),
            name: studentNameInput.value.trim().toUpperCase()
        };
        
        const lastThreeDigits = selectedStudent.id.slice(-3);
        const journalNumber = selectedQuestion.journal;
        const questionNumber = selectedQuestion.question.substring(0, 1);
        const newFilenameBase = `${lastThreeDigits}_j${journalNumber}_${questionNumber}`;

        const { jsPDF } = jspdf;
        const doc = new jsPDF('p', 'in', 'a4');
        const pageHeight = doc.internal.pageSize.getHeight();
        const pageWidth = doc.internal.pageSize.getWidth();
        
        const pageBorderMargin = 0.3;
        const contentMargin = 0.5;
        const contentWidth = pageWidth - 2 * contentMargin;
        const lineHeight = 12 / 72 * 1.3;

        let yPosition = contentMargin;
        let currentPage = 1;

        const addPageNumberAndBorder = (pageNumber) => {
            doc.setDrawColor(0);
            doc.setLineWidth(2 / 72);
            doc.rect(pageBorderMargin, pageBorderMargin, pageWidth - 2 * pageBorderMargin, pageHeight - 2 * pageBorderMargin);
            doc.setFont('times', 'normal');
            doc.setFontSize(10);
            doc.text(`Page ${pageNumber}`, pageWidth / 2, pageHeight - pageBorderMargin + 0.15, { align: 'center' });
        };

        doc.setFont('times', 'normal');
        doc.setFontSize(14);
        doc.text(selectedStudent.id, contentMargin, yPosition + (14 / 72 * 1.2));
        doc.text(selectedStudent.name, pageWidth - contentMargin, yPosition + (14 / 72 * 1.2), { align: 'right' });
        doc.text(`JOURNAL-${selectedQuestion.journal}`, pageWidth / 2, yPosition + (14 / 72 * 1.2), { align: 'center' });
        yPosition += (14 / 72 * 1.2) * 2; 

        doc.setFont('times', 'bold');
        doc.setFontSize(14);
        const questionLines = doc.splitTextToSize(selectedQuestion.question, contentWidth);
        doc.text(questionLines, contentMargin, yPosition);
        yPosition += (questionLines.length * (14 / 72 * 1.2)) + 0.2;

        for (let i = 0; i < filePairs.length; i++) {
            const pair = filePairs[i];
            let fileStartOnNewPage = i > 0;
            
            if (pair.code) {
                if (fileStartOnNewPage) {
                    doc.addPage();
                    currentPage++;
                    yPosition = contentMargin;
                }
                
                doc.setFont('times', 'normal');
                doc.setFontSize(14);
                doc.text(pair.code.name, contentMargin, yPosition);
                yPosition += (14 / 72 * 1.2) + 0.1;
                
                const formattedCodeLines = formatCodeForPreview(pair.code.content).split('\n');
                let currentLine = 0;
                
                while (currentLine < formattedCodeLines.length) {
                    if (yPosition + lineHeight > pageHeight - contentMargin && currentLine > 0) {
                        doc.addPage();
                        currentPage++;
                        yPosition = contentMargin;
                    }
                    const linesPerPage = Math.floor((pageHeight - yPosition - contentMargin) / lineHeight);
                    const linesToRender = formattedCodeLines.slice(currentLine, currentLine + linesPerPage).join('\n');
                    if (linesToRender.trim()) {
                        try {
                            const codeBlockIndent = 0.5;
                            const codeBlockWidth = contentWidth - codeBlockIndent;
                            
                            const tempDiv = document.createElement('div');
                            tempDiv.style.cssText = `width:${codeBlockWidth}in;font-family:'Times New Roman',serif;font-size:12pt;line-height:1.3;white-space:pre-wrap;word-wrap:break-word;color:#000;background:transparent;padding:0;margin:0;position:absolute;left:-9999px;top:0;`;
                            tempDiv.innerHTML = `<pre style="margin:0;font-family:'Times New Roman',serif;font-size:12pt;">${linesToRender}</pre>`;
                            document.body.appendChild(tempDiv);
                            
                            const canvas = await html2canvas(tempDiv, { scale: 3, useCORS: true, logging: false, backgroundColor: '#ffffff' });
                            document.body.removeChild(tempDiv);
                            
                            const imageData = canvas.toDataURL('image/png');
                            const codeImgRatio = canvas.width / canvas.height;
                            const codeImgHeight = codeBlockWidth / codeImgRatio;

                            if (yPosition + codeImgHeight > pageHeight - contentMargin) {
                                doc.addPage();
                                currentPage++;
                                yPosition = contentMargin;
                            }

                            doc.addImage(imageData, 'PNG', contentMargin + codeBlockIndent, yPosition, codeBlockWidth, codeImgHeight, null, 'FAST');
                            yPosition += codeImgHeight + 0.2;
                            
                        } catch (htmlError) {
                            console.error('Error rendering code as image:', htmlError);
                            doc.setFont('courier', 'normal');
                            doc.setFontSize(10);
                            const textLines = doc.splitTextToSize(linesToRender, contentWidth - 0.5);
                            doc.text(textLines, contentMargin + 0.5, yPosition);
                            yPosition += textLines.length * 0.15;
                        }
                        currentLine += linesToRender.split('\n').length;
                    } else {
                        currentLine = formattedCodeLines.length;
                    }
                }
                fileStartOnNewPage = true;
            }
            
            if (pair.screenshot) {
                if (fileStartOnNewPage) {
                    doc.addPage();
                    currentPage++;
                    yPosition = contentMargin;
                }
                try {
                    const img = new Image();
                    img.src = pair.screenshot.content;
                    await new Promise((resolve, reject) => { img.onload = resolve; img.onerror = reject; setTimeout(reject, 5000); });
                    
                    const imgRatio = img.width / img.height;
                    let imgWidth = contentWidth * 0.9;
                    let imgHeight = imgWidth / imgRatio;
                    const maxImageHeight = (pageHeight - contentMargin * 2) * 0.8;
                    if (imgHeight > maxImageHeight) {
                        imgHeight = maxImageHeight;
                        imgWidth = imgHeight * imgRatio;
                    }
                    
                    doc.setFont('times', 'bold');
                    doc.setFontSize(14);
                    doc.text('OUTPUT:', pageWidth / 2, yPosition, { align: 'center' });
                    yPosition += (14 / 72 * 1.2) + 0.1;
                    
                    if (yPosition + imgHeight > pageHeight - contentMargin) {
                        doc.addPage();
                        currentPage++;
                        yPosition = contentMargin;
                    }
                    const imgX = (pageWidth - imgWidth) / 2;
                    doc.addImage(img, 'PNG', imgX, yPosition, imgWidth, imgHeight, null, 'SLOW');
                    yPosition += imgHeight + 0.2;
                    
                } catch (imgError) {
                    console.error('Error processing screenshot for PDF:', imgError);
                    doc.setFont('times', 'normal');
                    doc.setFontSize(12);
                    doc.text('Error: Could not load screenshot image', pageWidth / 2, yPosition, { align: 'center' });
                    yPosition += 0.3;
                }
                fileStartOnNewPage = true;
            }
        }

        const pageCount = doc.internal.getNumberOfPages();
        for (let i = 1; i <= pageCount; i++) {
            doc.setPage(i);
            addPageNumberAndBorder(i);
        }

        doc.save(`${newFilenameBase}.pdf`);
        showStatus('PDF document downloaded successfully!');
        
    } catch (error) {
        console.error('Error generating PDF:', error);
        showError(`Error generating PDF: ${error.message || 'Unknown error occurred'}. Please try again.`);
    } finally {
        downloadPdfBtn.disabled = false;
    }
}

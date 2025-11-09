// Dữ liệu ngôn ngữ cho trang web
const translations = {
    'vi': {
        'about': 'Giới thiệu',
        'experience': 'Kinh nghiệm',
        'skills': 'Kỹ năng',
        'contact': 'Liên hệ',
        'name': 'Trần Đức Minh',
        'title': 'Nhà phát triển phần mềm',
        'bio': 'Nhà phát triển phần mềm năng động với hơn 11 năm kinh nghiệm trong việc xây dựng và duy trì các ứng dụng để nâng cao sự tương tác và hiệu suất của người dùng. Chuyên môn trong việc hợp tác với các nhóm liên chức năng để giải quyết các thách thức kỹ thuật phức tạp, đảm bảo tính năng liền mạch và khả năng bảo trì. Cam kết tuân thủ các tiêu chuẩn mã hóa và thực hành tốt nhất, góp phần vào chất lượng mã vượt trội và khả năng mở rộng. Đã có kinh nghiệm đã được chứng minh trong việc thực hiện kiểm tra và quy trình gỡ lỗi kỹ lưỡng, tối ưu hóa hiệu suất ứng dụng để có trải nghiệm người dùng nâng cao.',
        'experience_title': 'Kinh nghiệm làm việc',
        'job_title_1': 'Lập trình viên',
        'company_1': 'Fastdo, Da Nang',
        'duration_1': 'Tháng 7, 2029 - Tháng 11, 2040',
        'responsibilities_1': '<li>Phát triển và duy trì các ứng dụng phần mềm để nâng cao chức năng và trải nghiệm người dùng.</li><li>Hợp tác với các nhóm liên chức năng để xác định và giải quyết các vấn đề kỹ thuật.</li><li>Thực hiện các tiêu chuẩn mã hóa và thực hành tốt nhất để cải thiện chất lượng mã.</li><li>Tham gia đánh giá mã và đưa ra phản hồi mang tính xây dựng cho đồng nghiệp.</li><li>Thực hiện kiểm tra và gỡ lỗi kỹ lưỡng để đảm bảo hiệu suất tối ưu của ứng dụng.</li>',
        'education_title': 'Giáo dục',
        'school': 'Đại học Dong A',
        'education_duration': 'Tháng 9, 2025 - Tháng 6, 2029',
        'degree_note': 'Tốt nghiệp với bằng danh dự',
        'skills_title': 'Kỹ năng',
        'skill_1': 'Tư duy logic và sáng tạo',
        'contact_title': 'Liên hệ',
        'address_label': 'Địa chỉ:',
        'address_value': 'Da Nang, Viet Nam',
        'email_label': 'Email:',
        'email_value': 'trminhlaptrinhvien@gmail.com',
        'links_label': 'Liên kết:',
        'links_value': 'Facebook'
    },
    'en': {
        'about': 'Introduce',
        'experience': 'Experience',
        'skills': 'Skills',
        'contact': 'Contact',
        'name': 'Tran Duc Minh',
        'title': 'Software Developer',
        'bio': 'A dynamic software developer with over 11 years of experience building and maintaining applications to enhance user engagement and efficiency. Expertise in collaborating with cross-functional teams to solve complex technical challenges, ensuring seamless functionality and maintainability. Committed to adhering to coding standards and best practices, contributing to superior code quality and scalability. Proven experience in implementing thorough testing and debugging processes, optimizing application performance for an enhanced user experience.',
        'experience_title': 'Work Experience',
        'job_title_1': 'Programmer',
        'company_1': 'Company update',
        'duration_1': 'July, 2029 - November, 2040',
        'responsibilities_1': '<li>Developed and maintained software applications to enhance functionality and user experience.</li><li>Collaborated with cross-functional teams to identify and resolve technical issues.</li><li>Implemented coding standards and best practices to improve code quality.</li><li>Participated in code reviews and provided constructive feedback to peers.</li><li>Conducted thorough testing and debugging to ensure optimal application performance.</li>',
        'education_title': 'Education',
        'school': 'Dong A University',
        'education_duration': 'September, 2025 - June, 2029',
        'degree_note': 'Graduated with an honorary degree',
        'skills_title': 'Skills',
        'skill_1': 'Logical and creative thinking',
        'contact_title': 'Contact',
        'address_label': 'Address:',
        'address_value': 'Da Nang, Viet Nam',
        'email_label': 'Email:',
        'email_value': 'trminhlaptrinhvien@gmail.com',
        'links_label': 'Links:',
        'links_value': 'Facebook'
    }
};

// ==========================================================
// Chức năng Chuyển đổi Chế độ Sáng/Tối
// ==========================================================
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Kiểm tra trạng thái chế độ tối từ localStorage khi trang tải
const savedMode = localStorage.getItem('theme');
if (savedMode === 'dark') {
    body.classList.add('dark');
    darkModeToggle.textContent = '🌙';
}

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    if (body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        darkModeToggle.textContent = '🌙';
    } else {
        localStorage.setItem('theme', 'light');
        darkModeToggle.textContent = '☀️';
    }
});

// ==========================================================
// Chức năng Chuyển đổi Ngôn ngữ
// ==========================================================
const langToggle = document.getElementById('language-toggle');
let currentLang = 'vi';

// Hàm cập nhật nội dung trang dựa trên ngôn ngữ
const updateContent = (lang) => {
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang][key]) {
            // Đối với các phần tử có thể chứa HTML (như danh sách li), sử dụng innerHTML
            if (element.tagName === 'UL' || element.tagName === 'A') {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Cập nhật văn bản của các liên kết trên thanh điều hướng
    document.querySelectorAll('.nav-link').forEach(link => {
        const sectionId = link.getAttribute('href').substring(1);
        link.textContent = translations[lang][sectionId];
    });
};

// Xử lý sự kiện nhấp vào nút chuyển đổi ngôn ngữ
langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'vi' ? 'en' : 'vi';
    langToggle.textContent = currentLang.toUpperCase();
    updateContent(currentLang);
});

// Cập nhật nội dung ban đầu khi tải trang
updateContent(currentLang);
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        navLinks.forEach(l => l.classList.remove('text-green-300'));
        link.classList.add('text-green-300');
        setTimeout(() => {
            link.classList.remove('text-green-300');
        }, 2000);
    });
});

        // Data Storage
        const studyGroups = [
            { id: 1, name: 'Physics I', icon: '⚛️', description: 'Classical mechanics, thermodynamics, and waves', capacity: 500, active: true },
            { id: 2, name: 'Chemistry I', icon: '🧪', description: 'General chemistry, atomic structure, and chemical bonding', capacity: 500, active: true },
            { id: 3, name: 'Biology I', icon: '🧬', description: 'Cell biology, genetics, and molecular biology', capacity: 500, active: true },
            { id: 4, name: 'Organic Chemistry', icon: '⚗️', description: 'Carbon compounds, reactions, and synthesis', capacity: 500, active: true },
            { id: 5, name: 'Physics II', icon: '🔭', description: 'Electricity, magnetism, and modern physics', capacity: 500, active: true },
            { id: 6, name: 'Biochemistry', icon: '🔬', description: 'Biological molecules and metabolic pathways', capacity: 500, active: true },
            { id: 7, name: 'Microbiology', icon: '🦠', description: 'Bacteria, viruses, and microorganisms', capacity: 500, active: true },
            { id: 8, name: 'Anatomy', icon: '🫀', description: 'Human body structure and systems', capacity: 500, active: true },
            { id: 9, name: 'Physiology', icon: '💪', description: 'Body functions and mechanisms', capacity: 500, active: true },
            { id: 10, name: 'Genetics', icon: '🧬', description: 'Heredity, DNA, and gene expression', capacity: 500, active: true },
            { id: 11, name: 'Ecology', icon: '🌱', description: 'Ecosystems, biodiversity, and conservation', capacity: 500, active: true },
            { id: 12, name: 'Astronomy', icon: '🌌', description: 'Stars, planets, and universe exploration', capacity: 500, active: true },
            { id: 13, name: 'Inorganic Chemistry', icon: '💎', description: 'Non-carbon compounds and periodic trends', capacity: 500, active: true },
            { id: 14, name: 'Physical Chemistry', icon: '🌡️', description: 'Thermodynamics and quantum mechanics', capacity: 500, active: true },
            { id: 15, name: 'Molecular Biology', icon: '🔗', description: 'DNA replication, transcription, and translation', capacity: 500, active: true },
            { id: 16, name: 'Environmental Science', icon: '🌍', description: 'Climate change, pollution, and sustainability', capacity: 500, active: true },
            { id: 17, name: 'Neuroscience', icon: '🧠', description: 'Brain structure, function, and behavior', capacity: 500, active: true },
            { id: 18, name: 'Immunology', icon: '🛡️', description: 'Immune system and disease defense', capacity: 500, active: true },
            { id: 19, name: 'Pharmacology', icon: '💊', description: 'Drug action, mechanisms, and therapeutics', capacity: 500, active: true },
            { id: 20, name: 'Zoology', icon: '🦁', description: 'Animal biology, behavior, and classification', capacity: 500, active: true }
        ];

        let students = [];
        let currentUser = null;
        let isAdmin = false;
        let currentGroupId = null;
        let currentConversation = null;
        let messages = [];
        let groupMessages = {};
        let groupMeetings = {}; // Store active meeting links
        let admins = [
            { id: 1, name: 'Admin User', email: 'admin@studygroupfinder.com', password: 'admin123' }
        ];

        // Learning Resources for each group
        let learningResources = {
            1: [
                { id: 1, title: 'Khan Academy Physics', type: '🔗', description: 'Complete physics course with videos and exercises', link: 'https://www.khanacademy.org/science/physics' },
                { id: 2, title: 'Physics Classroom Tutorials', type: '🔗', description: 'Interactive physics tutorials and problems', link: 'https://www.physicsclassroom.com' },
                { id: 3, title: 'MIT OpenCourseWare Physics', type: '🔗', description: 'Free physics courses from MIT', link: 'https://ocw.mit.edu/courses/physics/' }
            ],
            2: [
                { id: 4, title: 'Khan Academy Chemistry', type: '🔗', description: 'Complete chemistry course with videos', link: 'https://www.khanacademy.org/science/chemistry' },
                { id: 5, title: 'Chemistry LibreTexts', type: '🔗', description: 'Open-access chemistry textbooks', link: 'https://chem.libretexts.org' }
            ],
            3: [
                { id: 6, title: 'Khan Academy Biology', type: '🔗', description: 'Complete biology course with videos', link: 'https://www.khanacademy.org/science/biology' },
                { id: 7, title: 'Biology LibreTexts', type: '🔗', description: 'Open-access biology textbooks', link: 'https://bio.libretexts.org' },
                { id: 8, title: 'HHMI BioInteractive', type: '🔗', description: 'Free biology resources from Howard Hughes', link: 'https://www.biointeractive.org/' }
            ],
            4: [
                { id: 9, title: 'Master Organic Chemistry', type: '🔗', description: 'Resources for organic chemistry students', link: 'https://www.masterorganicchemistry.com/' },
                { id: 10, title: 'Organic Chemistry Portal', type: '🔗', description: 'Reactions and mechanisms database', link: 'https://www.organic-chemistry.org/' }
            ],
            5: [
                { id: 11, title: 'Physics II MIT OCW', type: '🔗', description: 'Electricity and magnetism course', link: 'https://ocw.mit.edu/courses/physics/8-02-physics-ii-electricity-and-magnetism-spring-2007/' },
                { id: 12, title: 'Walter Lewin Lectures', type: '🔗', description: 'Famous physics lectures on YouTube', link: 'https://www.youtube.com/playlist?list=PLyQSN7X0ro2314mKyUiOILaOC2hk6Pc3j' }
            ],
            6: [
                { id: 13, title: 'Biochemistry Online Textbook', type: '🔗', description: 'Comprehensive biochemistry resource', link: 'https://www.ncbi.nlm.nih.gov/books/NBK22358/' },
                { id: 14, title: 'Biochemistry Animations', type: '🔗', description: 'Interactive biochemistry animations', link: 'https://www.wiley.com/college/boyer/0470003790/animations/animations.htm' }
            ],
            7: [
                { id: 15, title: 'Microbiology Society', type: '🔗', description: 'Microbiology resources and publications', link: 'https://microbiologysociety.org/' },
                { id: 16, title: 'MicrobeWiki', type: '🔗', description: 'Student-edited microbiology resource', link: 'https://microbewiki.kenyon.edu/index.php/MicrobeWiki' }
            ],
            8: [
                { id: 17, title: 'Anatomy Learning', type: '🔗', description: '3D anatomy models and quizzes', link: 'https://anatomylearning.com/' },
                { id: 18, title: 'Visible Body', type: '🔗', description: 'Interactive anatomy atlas', link: 'https://www.visiblebody.com/' }
            ],
            9: [
                { id: 19, title: 'Physiology Web', type: '🔗', description: 'Physiology tutorials and resources', link: 'https://www.physiologyweb.com/' },
                { id: 20, title: 'Human Physiology', type: '🔗', description: 'Comprehensive physiology guide', link: 'https://www.khanacademy.org/science/biology/human-biology' }
            ],
            10: [
                { id: 21, title: 'Genetics Home Reference', type: '🔗', description: 'Consumer-friendly genetics information', link: 'https://ghr.nlm.nih.gov/' },
                { id: 22, title: 'Learn Genetics', type: '🔗', description: 'Interactive genetics learning', link: 'https://learn.genetics.utah.edu/' }
            ],
            11: [
                { id: 23, title: 'Ecology Online', type: '🔗', description: 'Ecology resources and articles', link: 'https://www.ecology.com/' },
                { id: 24, title: 'Nature Ecology', type: '🔗', description: 'Latest ecology research', link: 'https://www.nature.com/natecolevol/' }
            ],
            12: [
                { id: 25, title: 'NASA Astronomy', type: '🔗', description: 'NASA astronomy resources', link: 'https://www.nasa.gov/topics/solarsystem/index.html' },
                { id: 26, title: 'Astronomy Magazine', type: '🔗', description: 'Astronomy news and resources', link: 'https://astronomy.com/' }
            ],
            13: [
                { id: 27, title: 'Inorganic Chemistry Resources', type: '🔗', description: 'Inorganic chemistry study materials', link: 'https://www.chemistry.msu.edu/faculty-research/inorganic/' },
                { id: 28, title: 'Crystal Structures', type: '🔗', description: 'Inorganic crystal structure database', link: 'https://www.ccdc.cam.ac.uk/structures/' }
            ],
            14: [
                { id: 29, title: 'Physical Chemistry', type: '🔗', description: 'Physical chemistry resources', link: 'https://www.physicallens.com/' },
                { id: 30, title: 'Quantum Chemistry', type: '🔗', description: 'Quantum chemistry tutorials', link: 'https://vergil.chemistry.gatech.edu/' }
            ],
            15: [
                { id: 31, title: 'Molecular Biology Resources', type: '🔗', description: 'Molecular biology protocols and tools', link: 'https://www.molbiol.org/' },
                { id: 32, title: 'DNA Learning Center', type: '🔗', description: 'DNA and molecular biology education', link: 'https://dnalc.cshl.edu/' }
            ],
            16: [
                { id: 33, title: 'EPA Environmental Science', type: '🔗', description: 'Environmental science resources', link: 'https://www.epa.gov/students' },
                { id: 34, title: 'Environmental Science.org', type: '🔗', description: 'Environmental science career guide', link: 'https://www.environmentalscience.org/' }
            ],
            17: [
                { id: 35, title: 'Neuroscience Online', type: '🔗', description: 'Open-access neuroscience textbook', link: 'https://nba.uth.tmc.edu/neuroscience/' },
                { id: 36, title: 'Brain Facts', type: '🔗', description: 'Neuroscience primer', link: 'https://www.brainfacts.org/' }
            ],
            18: [
                { id: 37, title: 'Immunology Resources', type: '🔗', description: 'Immunology educational materials', link: 'https://www.immunology.org/public-information' },
                { id: 38, title: 'Immune System Overview', type: '🔗', description: 'Immune system tutorial', link: 'https://www.khanacademy.org/science/biology/immunology' }
            ],
            19: [
                { id: 39, title: 'Pharmacology Education', type: '🔗', description: 'Pharmacology learning resources', link: 'https://www.pharmacologyeducation.org/' },
                { id: 40, title: 'DrugBank', type: '🔗', description: 'Drug database and information', link: 'https://go.drugbank.com/' }
            ],
            20: [
                { id: 41, title: 'Animal Diversity Web', type: '🔗', description: 'Zoology database', link: 'https://animaldiversity.org/' },
                { id: 42, title: 'Zoology Resources', type: '🔗', description: 'Comprehensive zoology materials', link: 'https://www.zoology.ubc.ca/' }
            ]
        };

        // Initialize
        function init() {
            loadData();
            populateGroupSelect();
            renderGroupsGrid();
            updateStats();
            
            // Add event listener for resource type change
            const resourceType = document.getElementById('newResourceType');
            if (resourceType) {
                resourceType.addEventListener('change', function() {
                    const linkGroup = document.getElementById('resourceLinkGroup');
                    if (this.value === '🔗') {
                        linkGroup.style.display = 'block';
                    } else {
                        linkGroup.style.display = 'none';
                    }
                });
            }

            // Handle announcement target change
            const announcementTarget = document.getElementById('announcementTarget');
            if (announcementTarget) {
                announcementTarget.addEventListener('change', function() {
                    document.getElementById('announcementGroupSelect').style.display = 'none';
                    document.getElementById('announcementStudentSelect').style.display = 'none';
                    
                    if (this.value === 'group') {
                        document.getElementById('announcementGroupSelect').style.display = 'block';
                    } else if (this.value === 'student') {
                        document.getElementById('announcementStudentSelect').style.display = 'block';
                    }
                });
            }
        }

        // Load data from localStorage
        function loadData() {
            const savedStudents = localStorage.getItem('students');
            const savedUser = localStorage.getItem('currentUser');
            const savedIsAdmin = localStorage.getItem('isAdmin');
            const savedMessages = localStorage.getItem('messages');
            const savedGroupMessages = localStorage.getItem('groupMessages');
            const savedResources = localStorage.getItem('learningResources');
            const savedAdmins = localStorage.getItem('admins');
            const savedGroups = localStorage.getItem('studyGroups');
            
            if (savedStudents) students = JSON.parse(savedStudents);
            if (savedUser) currentUser = JSON.parse(savedUser);
            if (savedIsAdmin) isAdmin = savedIsAdmin === 'true';
            if (savedMessages) messages = JSON.parse(savedMessages);
            if (savedGroupMessages) groupMessages = JSON.parse(savedGroupMessages);
            if (savedResources) learningResources = JSON.parse(savedResources);
            if (savedAdmins) admins = JSON.parse(savedAdmins);
            if (savedGroups) studyGroups = JSON.parse(savedGroups);
            
            updateUI();
        }

        // Save data to localStorage
        function saveData() {
            localStorage.setItem('students', JSON.stringify(students));
            if (currentUser) {
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
            }
            localStorage.setItem('isAdmin', isAdmin.toString());
            localStorage.setItem('messages', JSON.stringify(messages));
            localStorage.setItem('groupMessages', JSON.stringify(groupMessages));
            localStorage.setItem('learningResources', JSON.stringify(learningResources));
            localStorage.setItem('admins', JSON.stringify(admins));
            localStorage.setItem('studyGroups', JSON.stringify(studyGroups));
        }

        // Update UI based on login state
        function updateUI() {
            const groupsBtn = document.getElementById('groupsBtn');
            const myGroupBtn = document.getElementById('myGroupBtn');
            const messagesBtn = document.getElementById('messagesBtn');
            const adminBtn = document.getElementById('adminBtn');
            const logoutBtn = document.getElementById('logoutBtn');
            const userDisplay = document.getElementById('userDisplay');
            const currentUserName = document.getElementById('currentUserName');

            if (currentUser) {
                groupsBtn.style.display = 'block';
                myGroupBtn.style.display = 'block';
                messagesBtn.style.display = 'block';
                logoutBtn.style.display = 'block';
                userDisplay.style.display = 'flex';
                currentUserName.textContent = `${currentUser.firstName || currentUser.name} ${currentUser.lastName || ''}`;
            }

            if (isAdmin) {
                adminBtn.style.display = 'block';
            }
        }

        // Populate group select dropdown
        function populateGroupSelect() {
            const select = document.getElementById('groupSelect');
            select.innerHTML = '<option value="">Choose a study group...</option>';
            
            studyGroups.forEach(group => {
                if (group.active) {
                    const memberCount = getGroupMemberCount(group.id);
                    const option = document.createElement('option');
                    option.value = group.id;
                    option.textContent = `${group.icon} ${group.name} (${memberCount}/${group.capacity} members)`;
                    // Disable if group is full
                    if (memberCount >= group.capacity) {
                        option.disabled = true;
                        option.textContent += ' - FULL';
                    }
                    select.appendChild(option);
                }
            });
        }

        // Get group member count
        function getGroupMemberCount(groupId) {
            return students.filter(s => s.groupId === groupId).length;
        }

        // Register Student
        function registerStudent() {
            const firstName = document.getElementById('firstName').value.trim();
            const lastName = document.getElementById('lastName').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();
            const groupId = parseInt(document.getElementById('groupSelect').value);
            const studyTime = document.getElementById('studyTime').value;
            
            // Get selected days
            const dayCheckboxes = document.querySelectorAll('input[name="days"]:checked');
            const availableDays = Array.from(dayCheckboxes).map(cb => cb.value);

            if (!firstName || !lastName || !email || !password || !groupId || !studyTime || availableDays.length === 0) {
                alert('Please fill all fields and select at least one day of availability');
                return;
            }

            // Check if email already exists
            if (students.find(s => s.email === email)) {
                alert('This email is already registered!');
                return;
            }

            // Check group capacity
            const group = studyGroups.find(g => g.id === groupId);
            if (getGroupMemberCount(groupId) >= group.capacity) {
                alert('This group is full! Please choose another group.');
                return;
            }

            const newStudent = {
                id: Date.now(),
                firstName,
                lastName,
                email,
                password,
                groupId,
                availableDays,
                studyTime,
                joinedDate: new Date().toISOString()
            };

            students.push(newStudent);
            currentUser = newStudent;
            saveData();
            updateUI();

            alert(`Welcome ${firstName}! You've successfully joined ${group.name}!`);
            document.getElementById('studentForm').reset();
            showView('groups');
        }

        // Student Login
        function studentLogin() {
            const email = document.getElementById('studentEmail').value;
            const password = document.getElementById('studentPassword').value;

            const student = students.find(s => s.email === email && s.password === password);
            
            if (student) {
                currentUser = student;
                saveData();
                updateUI();
                alert('Login successful!');
                showView('groups');
            } else {
                alert('Invalid email or password!');
            }
        }

        // Student Password Recovery
        function recoverStudentPassword() {
            const email = document.getElementById('studentRecoveryEmail').value;
            const student = students.find(s => s.email === email);
            
            if (student) {
                alert(`Password recovery email sent to ${email}. Your password is: ${student.password}`);
                showView('studentLogin');
            } else {
                alert('No student account found with this email address!');
            }
        }

        // Show Admin Option
        function showAdminOption(option) {
            document.querySelectorAll('.admin-option-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');
            
            document.getElementById('adminLoginOption').style.display = 'none';
            document.getElementById('adminRegisterOption').style.display = 'none';
            document.getElementById('adminRecoveryOption').style.display = 'none';
            
            if (option === 'login') {
                document.getElementById('adminLoginOption').style.display = 'block';
                document.getElementById('adminLoginOption').classList.add('active');
            } else if (option === 'register') {
                document.getElementById('adminRegisterOption').style.display = 'block';
                document.getElementById('adminRegisterOption').classList.add('active');
            } else if (option === 'recovery') {
                document.getElementById('adminRecoveryOption').style.display = 'block';
                document.getElementById('adminRecoveryOption').classList.add('active');
            }
        }

        // Admin Login - FIXED
        function adminLogin() {
            const email = document.getElementById('adminUser').value;
            const password = document.getElementById('adminPass').value;

            const admin = admins.find(a => a.email === email && a.password === password);
            
            if (admin) {
                isAdmin = true;
                currentUser = { 
                    firstName: admin.name.split(' ')[0], 
                    lastName: admin.name.split(' ').slice(1).join(' '),
                    email: admin.email 
                };
                saveData();
                updateUI();
                alert('Admin login successful!');
                showView('admin');
            } else {
                alert('Invalid credentials! Please check your email and password.');
            }
        }

        // Admin Registration - FIXED
        function adminRegister() {
            const name = document.getElementById('adminName').value.trim();
            const email = document.getElementById('adminEmail').value.trim();
            const password = document.getElementById('adminPassword').value;
            const confirmPassword = document.getElementById('adminConfirmPassword').value;

            if (!name || !email || !password || !confirmPassword) {
                alert('Please fill all fields');
                return;
            }

            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }

            // Check if admin email already exists
            if (admins.find(a => a.email === email)) {
                alert('An admin with this email already exists!');
                return;
            }

            const newAdmin = {
                id: Date.now(),
                name: name,
                email: email,
                password: password
            };

            admins.push(newAdmin);
            saveData();
            alert('Admin account created successfully! You can now login.');
            
            // Clear form and switch to login
            document.getElementById('adminName').value = '';
            document.getElementById('adminEmail').value = '';
            document.getElementById('adminPassword').value = '';
            document.getElementById('adminConfirmPassword').value = '';
            
            showAdminOption('login');
        }

        // Admin Password Recovery - FIXED
        function recoverAdminPassword() {
            const email = document.getElementById('adminRecoveryEmail').value;
            const admin = admins.find(a => a.email === email);
            
            if (admin) {
                alert(`Password recovery email sent to ${email}. Your password is: ${admin.password}`);
                document.getElementById('adminRecoveryEmail').value = '';
                showAdminOption('login');
            } else {
                alert('No admin account found with this email address!');
            }
        }

        // Logout
        function logout() {
            if (confirm('Are you sure you want to logout?')) {
                currentUser = null;
                isAdmin = false;
                localStorage.removeItem('currentUser');
                localStorage.removeItem('isAdmin');
                updateUI();
                showView('landing');
            }
        }

        // Show View
        function showView(viewName) {
            document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
            document.getElementById(viewName + 'View').classList.add('active');

            if (viewName === 'groups') {
                renderGroupsGrid();
            } else if (viewName === 'admin') {
                renderAdminPanel();
            } else if (viewName === 'messages') {
                renderConversations();
            } else if (viewName === 'studentRegister') {
                populateGroupSelect();
            }

            updateStats();
        }

        // Render Groups Grid
        function renderGroupsGrid() {
            const grid = document.getElementById('groupsGrid');
            grid.innerHTML = '';

            // If user is a student and already in a group, show only their group
            if (currentUser && currentUser.groupId && !isAdmin) {
                const group = studyGroups.find(g => g.id === currentUser.groupId);
                if (group && group.active) {
                    const memberCount = getGroupMemberCount(group.id);
                    const card = document.createElement('div');
                    card.className = 'group-card';
                    card.onclick = () => showGroupDetail(group.id);
                    
                    card.innerHTML = `
                        <div class="group-icon">${group.icon}</div>
                        <h3>${group.name}</h3>
                        <p style="color: var(--gray); font-size: 14px; margin-top: 10px;">${group.description}</p>
                        <div class="group-stats">
                            <div class="stat-item">
                                <div class="stat-value">${memberCount}</div>
                                <div class="stat-label">Members</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-value">${group.capacity}</div>
                                <div class="stat-label">Capacity</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-value">${learningResources[group.id]?.length || 0}</div>
                                <div class="stat-label">Resources</div>
                            </div>
                        </div>
                    `;
                    grid.appendChild(card);
                }
            } else {
                // Show all groups for admin or students not in a group
                studyGroups.forEach(group => {
                    if (group.active) {
                        const memberCount = getGroupMemberCount(group.id);
                        const card = document.createElement('div');
                        card.className = 'group-card';
                        card.onclick = () => showGroupDetail(group.id);
                        
                        card.innerHTML = `
                            <div class="group-icon">${group.icon}</div>
                            <h3>${group.name}</h3>
                            <p style="color: var(--gray); font-size: 14px; margin-top: 10px;">${group.description}</p>
                            <div class="group-stats">
                                <div class="stat-item">
                                    <div class="stat-value">${memberCount}</div>
                                    <div class="stat-label">Members</div>
                                </div>
                                <div class="stat-item">
                                    <div class="stat-value">${group.capacity}</div>
                                    <div class="stat-label">Capacity</div>
                                </div>
                                <div class="stat-item">
                                    <div class="stat-value">${learningResources[group.id]?.length || 0}</div>
                                    <div class="stat-label">Resources</div>
                                </div>
                            </div>
                        `;
                        grid.appendChild(card);
                    }
                });
            }
        }

        // Filter Groups
        function filterGroups() {
            const search = document.getElementById('searchGroups').value.toLowerCase();
            const cards = document.querySelectorAll('#groupsGrid .group-card');
            
            cards.forEach(card => {
                const text = card.textContent.toLowerCase();
                card.style.display = text.includes(search) ? 'block' : 'none';
            });
        }

        // Show Group Detail
        function showGroupDetail(groupId) {
            currentGroupId = groupId;
            const group = studyGroups.find(g => g.id === groupId);
            const members = students.filter(s => s.groupId === groupId);
            const resources = learningResources[groupId] || [];

            document.getElementById('detailIcon').textContent = group.icon;
            document.getElementById('detailName').textContent = group.name;
            document.getElementById('detailMembers').textContent = members.length;
            document.getElementById('detailResources').textContent = resources.length;
            document.getElementById('detailDescription').textContent = group.description + '. This study group provides comprehensive learning materials, collaborative study sessions, and peer support for students enrolled in this course. Join us to enhance your understanding and achieve academic excellence!';

            // Show leave button and meet section if user is in this group
            const leaveBtn = document.getElementById('leaveGroupBtn');
            const messagesTab = document.getElementById('groupMessagesTab');
            const meetSection = document.getElementById('meetSection');
            
            if (currentUser && currentUser.groupId === groupId && !isAdmin) {
                leaveBtn.style.display = 'block';
                messagesTab.style.display = 'block';
                meetSection.style.display = 'block';
                displayActiveMeetings(groupId);
            } else {
                leaveBtn.style.display = 'none';
                messagesTab.style.display = 'none';
                meetSection.style.display = 'none';
            }

            renderMembers(members);
            renderResources(resources);
            renderGroupMessages(groupId);

            showView('groupDetail');
            showTab('overview');
        }

        // Show My Group
        function showMyGroup() {
            if (currentUser && currentUser.groupId) {
                showGroupDetail(currentUser.groupId);
            } else {
                alert('You are not in any group yet! Please join a group first.');
                showView('groups');
            }
        }

        // Render Members
        function renderMembers(members) {
            const grid = document.getElementById('membersGrid');
            grid.innerHTML = '';

            if (members.length === 0) {
                grid.innerHTML = '<p style="text-align:center; color:var(--gray);">No members yet</p>';
                return;
            }

            members.forEach(member => {
                const card = document.createElement('div');
                card.className = 'member-card';
                
                // Display availability information
                const availability = member.availableDays && member.studyTime 
                    ? `<div class="availability-badge">📅 ${member.availableDays.join(', ')}<br>⏰ ${member.studyTime}</div>`
                    : '';
                
                card.innerHTML = `
                    <div class="member-name">${member.firstName} ${member.lastName}</div>
                    <div class="member-email">${member.email}</div>
                    ${availability}
                    <div class="member-actions">
                        ${isAdmin ? `
                            <button class="btn-small danger" onclick="removeStudent(${member.id})">Remove</button>
                        ` : ''}
                        ${currentUser && currentUser.id !== member.id ? `
                            <button class="btn-small primary" onclick="startConversation(${member.id})">Message</button>
                        ` : ''}
                    </div>
                `;
                grid.appendChild(card);
            });
        }

        // Render Resources
        function renderResources(resources) {
            const grid = document.getElementById('resourcesGrid');
            grid.innerHTML = '';

            if (!currentUser || (!currentUser.groupId && !isAdmin)) {
                grid.innerHTML = '<p style="text-align:center; color:var(--gray); padding:40px;">Please join this group to access learning resources</p>';
                return;
            }

            if (resources.length === 0) {
                grid.innerHTML = '<p style="text-align:center; color:var(--gray); padding:40px;">No resources available for this group yet</p>';
                return;
            }

            resources.forEach(resource => {
                const card = document.createElement('div');
                card.className = 'resource-card';
                card.onclick = () => openResource(resource);
                card.innerHTML = `
                    <div class="resource-icon">${resource.type}</div>
                    <div class="resource-info">
                        <h4>${resource.title}</h4>
                        <p>${resource.description}</p>
                    </div>
                    <span class="badge badge-success">Available</span>
                    ${isAdmin ? `<button class="btn-tiny danger" onclick="event.stopPropagation(); removeResource(${resource.id}, ${currentGroupId})">Remove</button>` : ''}
                `;
                grid.appendChild(card);
            });
        }

        // Open Resource
        function openResource(resource) {
            if (resource.link) {
                // Open link in new tab
                window.open(resource.link, '_blank');
            } else {
                alert('This resource does not have a link available.');
            }
        }

        // Leave Group
        function leaveGroup() {
            if (!currentUser) return;

            if (confirm('Are you sure you want to leave this group?')) {
                const student = students.find(s => s.id === currentUser.id);
                if (student) {
                    student.groupId = null;
                    currentUser.groupId = null;
                    saveData();
                    alert('You have left the group successfully');
                    showView('groups');
                }
            }
        }

        // Remove Student (Admin)
        function removeStudent(studentId) {
            if (!isAdmin) return;

            if (confirm('Are you sure you want to remove this student?')) {
                const index = students.findIndex(s => s.id === studentId);
                if (index > -1) {
                    students.splice(index, 1);
                    saveData();
                    showGroupDetail(currentGroupId);
                    renderAdminPanel();
                    alert('Student removed successfully');
                }
            }
        }

        // Remove Resource (Admin)
        function removeResource(resourceId, groupId) {
            if (!isAdmin) return;

            if (confirm('Are you sure you want to remove this resource?')) {
                const resources = learningResources[groupId];
                const index = resources.findIndex(r => r.id === resourceId);
                if (index > -1) {
                    resources.splice(index, 1);
                    saveData();
                    showGroupDetail(groupId);
                    renderAdminPanel();
                    alert('Resource removed successfully');
                }
            }
        }

        // Show Tab
        function showTab(tabName) {
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
            
            event.target.classList.add('active');
            document.getElementById(tabName + 'Tab').classList.add('active');
        }

        // Update Stats
        function updateStats() {
            document.getElementById('totalStudentsCount').textContent = students.length;
        }

        // Messaging System
        function renderConversations() {
            const list = document.getElementById('conversationsList');
            list.innerHTML = '';

            if (!currentUser) return;

            // Get unique conversation partners
            const partners = new Set();
            messages.forEach(msg => {
                if (msg.senderId === currentUser.id) {
                    partners.add(msg.receiverId);
                } else if (msg.receiverId === currentUser.id) {
                    partners.add(msg.senderId);
                }
            });

            // Add admin as a conversation option for all users
            partners.add('admin');

            // Render conversation items
            partners.forEach(partnerId => {
                const partner = partnerId === 'admin' 
                    ? { id: 'admin', firstName: 'Admin', lastName: 'User' }
                    : students.find(s => s.id === partnerId);
                
                if (!partner) return;

                const lastMessage = getLastMessage(partnerId);
                const item = document.createElement('div');
                item.className = `conversation-item ${currentConversation === partnerId ? 'active' : ''}`;
                item.onclick = () => openConversation(partnerId);
                
                item.innerHTML = `
                    <div class="conversation-name">${partner.firstName} ${partner.lastName}</div>
                    <div class="conversation-preview">${lastMessage ? lastMessage.text : 'No messages yet'}</div>
                `;
                
                list.appendChild(item);
            });

            // If no conversations, show message
            if (partners.size === 0) {
                list.innerHTML = '<p style="text-align:center; color:var(--gray); padding:20px;">No conversations yet</p>';
            }
        }

        function getLastMessage(partnerId) {
            const conversationMessages = messages.filter(msg => 
                (msg.senderId === currentUser.id && msg.receiverId === partnerId) ||
                (msg.receiverId === currentUser.id && msg.senderId === partnerId)
            );
            
            return conversationMessages.length > 0 
                ? conversationMessages[conversationMessages.length - 1] 
                : null;
        }

        function openConversation(partnerId) {
            currentConversation = partnerId;
            const partner = partnerId === 'admin' 
                ? { firstName: 'Admin', lastName: 'User' }
                : students.find(s => s.id === partnerId);
            
            document.getElementById('chatUserName').textContent = `${partner.firstName} ${partner.lastName}`;
            renderMessages(partnerId);
            renderConversations();
        }

        function renderMessages(partnerId) {
            const container = document.getElementById('chatMessages');
            container.innerHTML = '';

            const conversationMessages = messages.filter(msg => 
                (msg.senderId === currentUser.id && msg.receiverId === partnerId) ||
                (msg.receiverId === currentUser.id && msg.senderId === partnerId)
            ).sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

            conversationMessages.forEach(msg => {
                const messageDiv = document.createElement('div');
                messageDiv.className = `message ${msg.senderId === currentUser.id ? 'sent' : 'received'}`;
                
                const sender = msg.senderId === 'admin' 
                    ? 'Admin' 
                    : students.find(s => s.id === msg.senderId)?.firstName || 'Unknown';
                
                const time = new Date(msg.timestamp);
                const timeString = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                const dateString = time.toLocaleDateString();
                
                messageDiv.innerHTML = `
                    <div class="message-sender">${sender}</div>
                    <div>${msg.text}</div>
                    <div class="message-time">${dateString} ${timeString}</div>
                    <div class="message-status">${msg.read ? '✓✓ Read' : '✓ Sent'}</div>
                `;
                
                container.appendChild(messageDiv);
                
                // Mark message as read if it's received
                if (msg.receiverId === currentUser.id && !msg.read) {
                    msg.read = true;
                    saveData();
                }
            });

            container.scrollTop = container.scrollHeight;
        }

        function sendMessage() {
            const input = document.getElementById('messageInput');
            const text = input.value.trim();
            
            if (!text || !currentConversation) return;

            const newMessage = {
                id: Date.now(),
                senderId: currentUser.id,
                receiverId: currentConversation,
                text: text,
                timestamp: new Date().toISOString(),
                read: false
            };

            messages.push(newMessage);
            saveData();
            renderMessages(currentConversation);
            renderConversations();
            input.value = '';
            
            // Play notification sound (optional)
            playNotificationSound();
        }

        function playNotificationSound() {
            // Simple beep using Audio API
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.value = 800;
            oscillator.type = 'sine';
            
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.1);
        }

        // Emoji Picker Functions
        function toggleEmojiPicker() {
            const picker = document.getElementById('emojiPicker');
            picker.classList.toggle('active');
        }

        function insertEmoji(emoji) {
            const input = document.getElementById('messageInput');
            input.value += emoji;
            input.focus();
            document.getElementById('emojiPicker').classList.remove('active');
        }

        function toggleGroupEmojiPicker() {
            const picker = document.getElementById('groupEmojiPicker');
            picker.classList.toggle('active');
        }

        function insertGroupEmoji(emoji) {
            const input = document.getElementById('groupMessageInput');
            input.value += emoji;
            input.focus();
            document.getElementById('groupEmojiPicker').classList.remove('active');
        }

        // Typing Indicator
        let typingTimeout;
        function handleTyping(event) {
            if (event.key === 'Enter') {
                sendMessage();
                return;
            }
            
            // Show typing indicator (in real app, would broadcast to other user)
            clearTimeout(typingTimeout);
            typingTimeout = setTimeout(() => {
                // Hide typing indicator
            }, 1000);
        }

        function handleGroupTyping(event) {
            if (event.key === 'Enter') {
                sendGroupMessage();
                return;
            }
            
            clearTimeout(typingTimeout);
            typingTimeout = setTimeout(() => {
                // Hide typing indicator
            }, 1000);
        }

        function startConversation(studentId) {
            currentConversation = studentId;
            showView('messages');
            openConversation(studentId);
        }

        // Group Messaging
        function renderGroupMessages(groupId) {
            const container = document.getElementById('groupChatMessages');
            container.innerHTML = '';

            if (!groupMessages[groupId]) {
                groupMessages[groupId] = [];
            }

            const messages = groupMessages[groupId].sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

            messages.forEach(msg => {
                const messageDiv = document.createElement('div');
                messageDiv.className = `message ${msg.senderId === currentUser.id ? 'sent' : 'received'}`;
                
                const sender = msg.senderId === 'admin' 
                    ? 'Admin' 
                    : students.find(s => s.id === msg.senderId)?.firstName || 'Unknown';
                
                const time = new Date(msg.timestamp);
                const timeString = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                const dateString = time.toLocaleDateString();
                
                messageDiv.innerHTML = `
                    <div class="message-sender">${sender}</div>
                    <div>${msg.text}</div>
                    <div class="message-time">${dateString} ${timeString}</div>
                `;
                
                container.appendChild(messageDiv);
            });

            container.scrollTop = container.scrollHeight;
        }

        function sendGroupMessage() {
            const input = document.getElementById('groupMessageInput');
            const text = input.value.trim();
            
            if (!text || !currentGroupId) return;

            if (!groupMessages[currentGroupId]) {
                groupMessages[currentGroupId] = [];
            }

            const newMessage = {
                id: Date.now(),
                senderId: currentUser.id,
                text: text,
                timestamp: new Date().toISOString(),
                groupId: currentGroupId
            };

            groupMessages[currentGroupId].push(newMessage);
            saveData();
            renderGroupMessages(currentGroupId);
            input.value = '';
            
            // Play notification sound
            playNotificationSound();
        }

        // Google Meet Functions
        function startGoogleMeet() {
            if (!currentUser || !currentGroupId) return;
            
            const meetingId = generateMeetingId();
            const meetingLink = `https://meet.google.com/${meetingId}`;
            
            // Store meeting in group meetings
            if (!groupMeetings[currentGroupId]) {
                groupMeetings[currentGroupId] = [];
            }
            
            const meeting = {
                id: Date.now(),
                link: meetingLink,
                hostId: currentUser.id,
                hostName: `${currentUser.firstName} ${currentUser.lastName}`,
                createdAt: new Date().toISOString(),
                active: true
            };
            
            groupMeetings[currentGroupId].push(meeting);
            localStorage.setItem('groupMeetings', JSON.stringify(groupMeetings));
            
            // Post meeting link to group chat
            const meetingMessage = {
                id: Date.now() + 1,
                senderId: currentUser.id,
                text: `📹 Meeting started: ${meetingLink}\nClick here to join the study session!`,
                timestamp: new Date().toISOString(),
                groupId: currentGroupId
            };
            
            if (!groupMessages[currentGroupId]) {
                groupMessages[currentGroupId] = [];
            }
            groupMessages[currentGroupId].push(meetingMessage);
            saveData();
            
            // Open Google Meet
            window.open(meetingLink, '_blank');
            
            // Refresh display
            displayActiveMeetings(currentGroupId);
            renderGroupMessages(currentGroupId);
            
            alert('Google Meet started! The meeting link has been shared in the group chat.');
        }

        function generateMeetingId() {
            // Generate a random meeting ID similar to Google Meet format
            const chars = 'abcdefghijklmnopqrstuvwxyz';
            let id = '';
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 4; j++) {
                    id += chars.charAt(Math.floor(Math.random() * chars.length));
                }
                if (i < 2) id += '-';
            }
            return id;
        }

        function joinExistingMeet() {
            const meetLink = prompt('Enter the Google Meet link you want to join:');
            if (meetLink) {
                if (meetLink.includes('meet.google.com') || meetLink.includes('https://')) {
                    window.open(meetLink, '_blank');
                } else {
                    alert('Please enter a valid Google Meet link.');
                }
            }
        }

        function displayActiveMeetings(groupId) {
            const container = document.getElementById('activeMeetings');
            if (!container) return;
            
            // Load meetings from localStorage
            const savedMeetings = localStorage.getItem('groupMeetings');
            if (savedMeetings) {
                groupMeetings = JSON.parse(savedMeetings);
            }
            
            const meetings = groupMeetings[groupId] || [];
            
            // Filter active meetings (less than 4 hours old)
            const now = new Date();
            const activeMeetings = meetings.filter(meeting => {
                const created = new Date(meeting.createdAt);
                const hoursDiff = (now - created) / (1000 * 60 * 60);
                return hoursDiff < 4 && meeting.active;
            });
            
            if (activeMeetings.length === 0) {
                container.innerHTML = '<p style="color: var(--gray); font-size: 14px;">No active meetings</p>';
                return;
            }
            
            container.innerHTML = '<h5 style="margin-bottom: 10px;">Active Meetings:</h5>';
            activeMeetings.forEach(meeting => {
                const meetingDiv = document.createElement('div');
                meetingDiv.style.cssText = 'padding: 10px; background: white; border-radius: 8px; margin-bottom: 10px; border: 2px solid var(--gray-light);';
                
                const timeAgo = getTimeAgo(meeting.createdAt);
                
                meetingDiv.innerHTML = `
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <strong>${meeting.hostName}</strong>
                            <div style="font-size: 12px; color: var(--gray);">Started ${timeAgo}</div>
                        </div>
                        <button onclick="window.open('${meeting.link}', '_blank')" class="btn-small primary">
                            Join Meeting
                        </button>
                    </div>
                `;
                
                container.appendChild(meetingDiv);
            });
        }

        function getTimeAgo(timestamp) {
            const now = new Date();
            const past = new Date(timestamp);
            const diffMs = now - past;
            const diffMins = Math.floor(diffMs / 60000);
            const diffHours = Math.floor(diffMs / 3600000);
            
            if (diffMins < 1) return 'just now';
            if (diffMins < 60) return `${diffMins} minute${diffMins > 1 ? 's' : ''} ago`;
            if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
            return past.toLocaleDateString();
        }

        // Render Admin Panel
        function renderAdminPanel() {
            document.getElementById('adminTotalStudents').textContent = students.length;
            const activeGroups = studyGroups.filter(g => g.active).length;
            document.getElementById('adminAvgMembers').textContent = activeGroups > 0 ? Math.round(students.length / activeGroups) : 0;
            document.getElementById('adminTotalGroups').textContent = activeGroups;

            // All Students
            const allGrid = document.getElementById('allStudentsGrid');
            allGrid.innerHTML = '';

            students.forEach(student => {
                const group = studyGroups.find(g => g.id === student.groupId);
                const card = document.createElement('div');
                card.className = 'member-card';
                card.innerHTML = `
                    <div class="member-name">${student.firstName} ${student.lastName}</div>
                    <div class="member-email">${student.email}</div>
                    <p style="font-size:13px; color:var(--gray); margin:10px 0;">
                        ${group ? `${group.icon} ${group.name}` : 'No group assigned'}
                    </p>
                    <div class="member-actions">
                        <button class="btn-small primary" onclick="startConversation(${student.id})">Message</button>
                        <button class="btn-small danger" onclick="removeStudent(${student.id})">Remove</button>
                    </div>
                `;
                allGrid.appendChild(card);
            });

            // Groups Overview
            const adminGroupsGrid = document.getElementById('adminGroupsGrid');
            adminGroupsGrid.innerHTML = '';

            studyGroups.forEach(group => {
                const memberCount = getGroupMemberCount(group.id);
                const card = document.createElement('div');
                card.className = `group-card ${!group.active ? 'deleted-group' : ''}`;
                card.onclick = () => showGroupDetail(group.id);
                
                card.innerHTML = `
                    <div class="group-icon">${group.icon}</div>
                    <h3>${group.name} ${!group.active ? '(Deleted)' : ''}</h3>
                    <p style="color: var(--gray); font-size: 14px; margin-top: 10px;">${group.description}</p>
                    <div class="group-stats">
                        <div class="stat-item">
                            <div class="stat-value">${memberCount}</div>
                            <div class="stat-label">Members</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">${Math.round((memberCount/group.capacity)*100)}%</div>
                            <div class="stat-label">Filled</div>
                        </div>
                    </div>
                    <div class="member-actions" style="margin-top: 15px;">
                        ${group.active ? 
                            `<button class="btn-small danger" onclick="event.stopPropagation(); deleteGroup(${group.id})">Delete Group</button>` :
                            `<button class="btn-small primary" onclick="event.stopPropagation(); restoreGroup(${group.id})">Restore Group</button>`
                        }
                    </div>
                `;
                adminGroupsGrid.appendChild(card);
            });

            // Resources Management
            const adminResourcesGrid = document.getElementById('adminResourcesGrid');
            adminResourcesGrid.innerHTML = '';

            let totalResources = 0;
            studyGroups.forEach(group => {
                const resources = learningResources[group.id] || [];
                totalResources += resources.length;
                
                resources.forEach(resource => {
                    const card = document.createElement('div');
                    card.className = 'resource-card';
                    card.onclick = () => openResource(resource);
                    card.innerHTML = `
                        <div class="resource-icon">${resource.type}</div>
                        <div class="resource-info">
                            <h4>${resource.title}</h4>
                            <p>${resource.description}</p>
                            <p style="font-size:12px; color:var(--gray);">Group: ${group.name}</p>
                        </div>
                        <span class="badge badge-primary">Admin</span>
                        <button class="btn-tiny danger" onclick="event.stopPropagation(); removeResource(${resource.id}, ${group.id})">Remove</button>
                    `;
                    adminResourcesGrid.appendChild(card);
                });
            });

            document.getElementById('adminTotalResources').textContent = totalResources;

            // Message Management
            renderAdminMessages();
        }

        // Render Admin Messages
        function renderAdminMessages() {
            const container = document.getElementById('adminMessagesList');
            container.innerHTML = '';

            // Combine all messages
            const allMessages = [...messages];
            Object.values(groupMessages).forEach(groupMsgArray => {
                allMessages.push(...groupMsgArray);
            });

            // Sort by timestamp
            allMessages.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

            if (allMessages.length === 0) {
                container.innerHTML = '<p style="text-align:center; color:var(--gray); padding:20px;">No messages yet</p>';
                return;
            }

            allMessages.forEach(msg => {
                const messageDiv = document.createElement('div');
                messageDiv.className = `message ${msg.senderId === currentUser.id ? 'sent' : 'received'}`;
                
                const sender = msg.senderId === 'admin' 
                    ? 'Admin' 
                    : students.find(s => s.id === msg.senderId)?.firstName || 'Unknown';
                
                messageDiv.innerHTML = `
                    <div class="message-sender">${sender}</div>
                    <div>${msg.text}</div>
                    <div class="message-time">${new Date(msg.timestamp).toLocaleString()}</div>
                    <div class="message-actions">
                        <button class="btn-tiny danger" onclick="deleteMessage(${msg.id}, ${msg.groupId || 'null'})">Delete</button>
                    </div>
                `;
                
                container.appendChild(messageDiv);
            });
        }

        // Delete Message (Admin)
        function deleteMessage(messageId, groupId) {
            if (!isAdmin) return;

            if (confirm('Are you sure you want to delete this message?')) {
                if (groupId) {
                    // Group message
                    const groupMsgArray = groupMessages[groupId];
                    const index = groupMsgArray.findIndex(m => m.id === messageId);
                    if (index > -1) {
                        groupMsgArray.splice(index, 1);
                    }
                } else {
                    // Private message
                    const index = messages.findIndex(m => m.id === messageId);
                    if (index > -1) {
                        messages.splice(index, 1);
                    }
                }
                saveData();
                renderAdminMessages();
                alert('Message deleted successfully');
            }
        }

        // Delete Group (Admin)
        function deleteGroup(groupId) {
            if (!isAdmin) return;

            if (confirm('Are you sure you want to delete this group? It can be restored later.')) {
                const group = studyGroups.find(g => g.id === groupId);
                if (group) {
                    group.active = false;
                    saveData();
                    renderAdminPanel();
                    alert('Group deleted successfully');
                }
            }
        }

        // Restore Group (Admin)
        function restoreGroup(groupId) {
            if (!isAdmin) return;

            if (confirm('Are you sure you want to restore this group?')) {
                const group = studyGroups.find(g => g.id === groupId);
                if (group) {
                    group.active = true;
                    saveData();
                    renderAdminPanel();
                    alert('Group restored successfully');
                }
            }
        }

        // Show Admin Tab
        function showAdminTab(tabName) {
            document.querySelectorAll('#adminView .tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('#adminView .tab-content').forEach(t => t.classList.remove('active'));
            
            event.target.classList.add('active');
            if (tabName === 'all') {
                document.getElementById('adminAllTab').classList.add('active');
            } else if (tabName === 'groups') {
                document.getElementById('adminGroupsTab').classList.add('active');
            } else if (tabName === 'resources') {
                document.getElementById('adminResourcesTab').classList.add('active');
            } else {
                document.getElementById('adminMessagesTab').classList.add('active');
            }
        }

        // Filter Students
        function filterStudents() {
            const search = document.getElementById('searchStudents').value.toLowerCase();
            const cards = document.querySelectorAll('#allStudentsGrid .member-card');
            
            cards.forEach(card => {
                const text = card.textContent.toLowerCase();
                card.style.display = text.includes(search) ? 'block' : 'none';
            });
        }

        // Filter Messages
        function filterMessages() {
            const search = document.getElementById('searchMessages').value.toLowerCase();
            const messages = document.querySelectorAll('#adminMessagesList .message');
            
            messages.forEach(msg => {
                const text = msg.textContent.toLowerCase();
                msg.style.display = text.includes(search) ? 'block' : 'none';
            });
        }

        // Admin Actions
        function showAdminAction(action) {
            document.getElementById('addGroupModal').style.display = 'none';
            document.getElementById('addResourceModal').style.display = 'none';
            document.getElementById('sendAnnouncementModal').style.display = 'none';
            document.getElementById('addAdminModal').style.display = 'none';

            if (action === 'addGroup') {
                document.getElementById('addGroupModal').style.display = 'flex';
            } else if (action === 'addResource') {
                // Populate group select for resources
                const groupSelect = document.getElementById('newResourceGroup');
                groupSelect.innerHTML = '';
                studyGroups.forEach(group => {
                    if (group.active) {
                        const option = document.createElement('option');
                        option.value = group.id;
                        option.textContent = group.name;
                        groupSelect.appendChild(option);
                    }
                });
                document.getElementById('addResourceModal').style.display = 'flex';
            } else if (action === 'sendAnnouncement') {
                // Populate selects for announcements
                const groupSelect = document.getElementById('targetGroupSelect');
                groupSelect.innerHTML = '';
                studyGroups.forEach(group => {
                    if (group.active) {
                        const option = document.createElement('option');
                        option.value = group.id;
                        option.textContent = group.name;
                        groupSelect.appendChild(option);
                    }
                });

                const studentSelect = document.getElementById('targetStudentSelect');
                studentSelect.innerHTML = '';
                students.forEach(student => {
                    const option = document.createElement('option');
                    option.value = student.id;
                    option.textContent = `${student.firstName} ${student.lastName}`;
                    studentSelect.appendChild(option);
                });

                document.getElementById('sendAnnouncementModal').style.display = 'flex';
            } else if (action === 'addAdmin') {
                document.getElementById('addAdminModal').style.display = 'flex';
            }
        }

        function closeAdminAction() {
            document.getElementById('addGroupModal').style.display = 'none';
            document.getElementById('addResourceModal').style.display = 'none';
            document.getElementById('sendAnnouncementModal').style.display = 'none';
            document.getElementById('addAdminModal').style.display = 'none';
        }

        function addNewGroup() {
            const name = document.getElementById('newGroupName').value.trim();
            const icon = document.getElementById('newGroupIcon').value;
            const description = document.getElementById('newGroupDescription').value.trim();

            if (!name || !description) {
                alert('Please fill all fields');
                return;
            }

            const newGroup = {
                id: studyGroups.length + 1,
                name: name,
                icon: icon,
                description: description,
                capacity: 500,
                active: true
            };

            studyGroups.push(newGroup);
            learningResources[newGroup.id] = [];
            saveData();
            closeAdminAction();
            renderGroupsGrid();
            renderAdminPanel();
            alert('New study group added successfully!');
            
            // Clear form
            document.getElementById('newGroupName').value = '';
            document.getElementById('newGroupDescription').value = '';
        }

        function addNewResource() {
            const title = document.getElementById('newResourceTitle').value.trim();
            const type = document.getElementById('newResourceType').value;
            const description = document.getElementById('newResourceDescription').value.trim();
            const link = document.getElementById('newResourceLink').value.trim();
            const groupId = parseInt(document.getElementById('newResourceGroup').value);

            if (!title || !description) {
                alert('Please fill all fields');
                return;
            }

            if (type === '🔗' && !link) {
                alert('Please provide a resource link');
                return;
            }

            const newResource = {
                id: Date.now(),
                title: title,
                type: type,
                description: description
            };

            if (type === '🔗' && link) {
                newResource.link = link;
            }

            if (!learningResources[groupId]) {
                learningResources[groupId] = [];
            }

            learningResources[groupId].push(newResource);
            saveData();
            closeAdminAction();
            renderAdminPanel();
            alert('New resource added successfully!');
            
            // Clear form
            document.getElementById('newResourceTitle').value = '';
            document.getElementById('newResourceDescription').value = '';
            document.getElementById('newResourceLink').value = '';
        }

        function sendAnnouncement() {
            const title = document.getElementById('announcementTitle').value.trim();
            const message = document.getElementById('announcementMessage').value.trim();
            const target = document.getElementById('announcementTarget').value;

            if (!title || !message) {
                alert('Please fill all fields');
                return;
            }

            let announcementMessage = `[ANNOUNCEMENT] ${title}: ${message}`;

            if (target === 'all') {
                // Send to all students
                students.forEach(student => {
                    const newMessage = {
                        id: Date.now() + Math.random(),
                        senderId: 'admin',
                        receiverId: student.id,
                        text: announcementMessage,
                        timestamp: new Date().toISOString()
                    };
                    messages.push(newMessage);
                });
            } else if (target === 'group') {
                const groupId = parseInt(document.getElementById('targetGroupSelect').value);
                const groupStudents = students.filter(s => s.groupId === groupId);
                
                groupStudents.forEach(student => {
                    const newMessage = {
                        id: Date.now() + Math.random(),
                        senderId: 'admin',
                        receiverId: student.id,
                        text: announcementMessage,
                        timestamp: new Date().toISOString()
                    };
                    messages.push(newMessage);
                });
            } else if (target === 'student') {
                const studentId = parseInt(document.getElementById('targetStudentSelect').value);
                
                const newMessage = {
                    id: Date.now(),
                    senderId: 'admin',
                    receiverId: studentId,
                    text: announcementMessage,
                    timestamp: new Date().toISOString()
                };
                messages.push(newMessage);
            }

            saveData();
            closeAdminAction();
            alert('Announcement sent successfully!');
            
            // Clear form
            document.getElementById('announcementTitle').value = '';
            document.getElementById('announcementMessage').value = '';
        }

        function addNewAdmin() {
            const name = document.getElementById('newAdminName').value.trim();
            const email = document.getElementById('newAdminEmail').value.trim();
            const password = document.getElementById('newAdminPassword').value.trim();

            if (!name || !email || !password) {
                alert('Please fill all fields');
                return;
            }

            // Check if admin email already exists
            if (admins.find(a => a.email === email)) {
                alert('An admin with this email already exists!');
                return;
            }

            const newAdmin = {
                id: Date.now(),
                name: name,
                email: email,
                password: password
            };

            admins.push(newAdmin);
            saveData();
            closeAdminAction();
            alert(`New admin added successfully!\nEmail: ${email}\nPassword: ${password}`);
            
            // Clear form
            document.getElementById('newAdminName').value = '';
            document.getElementById('newAdminEmail').value = '';
            document.getElementById('newAdminPassword').value = '';
        }

        // Initialize on load
        window.onload = init;
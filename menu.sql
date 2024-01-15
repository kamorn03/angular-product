-- Create CoffeeShopStock table
CREATE TABLE CoffeeShopStock (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT true,
    group_name VARCHAR(50) NOT NULL,
    sub_group_name VARCHAR(50),
    name_jp VARCHAR(50),
    name_kr VARCHAR(50),
    available_unit INT NOT NULL,
    soft_delete BOOLEAN DEFAULT false
);

-- Insert sample data into CoffeeShopStock table
INSERT INTO CoffeeShopStock (name, is_active, group_name, sub_group_name, name_jp, name_kr, available_unit, soft_delete)
VALUES 
    ('Espresso', true, 'Coffee', 'Hot Drinks', 'エスプレッソ', '에스프레소', 100, false),
    ('Latte', true, 'Coffee', 'Hot Drinks', 'ラテ', '라떼', 75, false),
    ('Americano', false, 'Coffee', 'Hot Drinks', 'アメリカーノ', '아메리카노', 0, false),
    ('Cappuccino', true, 'Coffee', 'Hot Drinks', 'カプチーノ', '카푸치노', 50, false),
    ('Iced Coffee', true, 'Coffee', 'Cold Drinks', 'アイスコーヒー', '아이스 커피', 120, false),
    ('Green Tea', true, 'Tea', 'Hot Drinks', '緑茶', '녹차', 80, false),
    ('Herbal Tea', true, 'Tea', 'Hot Drinks', 'ハーブティー', '허브 차', 60, false),
    ('Sushi Set A', true, 'Food', 'Sushi', '寿司セットA', '초밥 세트A', 30, false),
    ('Sushi Set B', false, 'Food', 'Sushi', '寿司セットB', '초밥 세트B', 0, false),
    ('Ramen', true, 'Food', 'Noodles', 'ラーメン', '라면', 40, false),
    ('Tempura Udon', true, 'Food', 'Noodles', '天ぷらうどん', '튀김우동', 25, false),
    ('Yakitori', true, 'Food', 'Grilled Skewers', '焼き鳥', '야끼토리', 50, false),
    ('Takoyaki', true, 'Food', 'Street Food', 'たこ焼き', '타코야끼', 45, false),
    ('Okonomiyaki', true, 'Food', 'Street Food', 'お好み焼き', '오코노미야끼', 35, false),
    ('Miso Soup', true, 'Food', 'Soup', '味噌汁', '미소 스프', 60, false),
    ('Matcha Latte', true, 'Food', 'Hot Drinks', '抹茶ラテ', '말차 라떼', 55, false),
    ('Dorayaki', true, 'Food', 'Dessert', 'どら焼き', '도라야끼', 20, false),
    ('Taiyaki', true, 'Food', 'Dessert', 'たい焼き', '타이야키', 15, false),
    ('Sashimi Platter', true, 'Food', 'Sashimi', '刺身プレート', '사시미 플래터', 30, false);

-- Query to retrieve all data from CoffeeShopStock table
SELECT * FROM CoffeeShopStock;

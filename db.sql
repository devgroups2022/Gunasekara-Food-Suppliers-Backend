PGDMP     8    '                z         
   gunasekara    14.3    14.3     !           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            "           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            #           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            $           1262    16709 
   gunasekara    DATABASE     n   CREATE DATABASE gunasekara WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_United States.1252';
    DROP DATABASE gunasekara;
                postgres    false            �            1259    17002 
   attendence    TABLE     �   CREATE TABLE public.attendence (
    id integer NOT NULL,
    date date NOT NULL,
    "time" time without time zone NOT NULL
);
    DROP TABLE public.attendence;
       public         heap    postgres    false            �            1259    16995    customer    TABLE     �   CREATE TABLE public.customer (
    id integer NOT NULL,
    name text NOT NULL,
    tp text,
    whatsapp text,
    address text NOT NULL,
    email text
);
    DROP TABLE public.customer;
       public         heap    postgres    false            �            1259    16900    employee    TABLE     �   CREATE TABLE public.employee (
    code integer NOT NULL,
    name text NOT NULL,
    nic text,
    tp text,
    address text,
    date text NOT NULL
);
    DROP TABLE public.employee;
       public         heap    postgres    false            �            1259    16912    fuel    TABLE     u   CREATE TABLE public.fuel (
    number text NOT NULL,
    date text NOT NULL,
    liters double precision NOT NULL
);
    DROP TABLE public.fuel;
       public         heap    postgres    false            �            1259    16932 
   insuarence    TABLE     o   CREATE TABLE public.insuarence (
    number text NOT NULL,
    v_from text NOT NULL,
    v_to text NOT NULL
);
    DROP TABLE public.insuarence;
       public         heap    postgres    false            �            1259    16977    purchase    TABLE       CREATE TABLE public.purchase (
    id integer NOT NULL,
    p_from text NOT NULL,
    number text,
    rp integer,
    r_price integer,
    br integer,
    b_price integer,
    bh integer,
    bh_price integer,
    peacock integer,
    p_price integer,
    discription text
);
    DROP TABLE public.purchase;
       public         heap    postgres    false            �            1259    16943    renew    TABLE     j   CREATE TABLE public.renew (
    number text NOT NULL,
    v_from text NOT NULL,
    v_to text NOT NULL
);
    DROP TABLE public.renew;
       public         heap    postgres    false            �            1259    16917    repair    TABLE     �   CREATE TABLE public.repair (
    number text NOT NULL,
    date text NOT NULL,
    discription text NOT NULL,
    amount text
);
    DROP TABLE public.repair;
       public         heap    postgres    false            �            1259    16982    sell    TABLE       CREATE TABLE public.sell (
    id integer NOT NULL,
    s_to text NOT NULL,
    number text,
    rp integer,
    r_price integer,
    br integer,
    b_price integer,
    bh integer,
    bh_price integer,
    peacock integer,
    p_price integer,
    discription text
);
    DROP TABLE public.sell;
       public         heap    postgres    false            �            1259    16948    service    TABLE     �   CREATE TABLE public.service (
    number text NOT NULL,
    date text NOT NULL,
    present double precision NOT NULL,
    next double precision NOT NULL
);
    DROP TABLE public.service;
       public         heap    postgres    false            �            1259    16988    supplier    TABLE     �   CREATE TABLE public.supplier (
    id integer NOT NULL,
    name text NOT NULL,
    tp text,
    whatsapp text,
    address text NOT NULL,
    email text
);
    DROP TABLE public.supplier;
       public         heap    postgres    false                      0    17002 
   attendence 
   TABLE DATA           6   COPY public.attendence (id, date, "time") FROM stdin;
    public          postgres    false    219   �                 0    16995    customer 
   TABLE DATA           J   COPY public.customer (id, name, tp, whatsapp, address, email) FROM stdin;
    public          postgres    false    218   �                 0    16900    employee 
   TABLE DATA           F   COPY public.employee (code, name, nic, tp, address, date) FROM stdin;
    public          postgres    false    209                     0    16912    fuel 
   TABLE DATA           4   COPY public.fuel (number, date, liters) FROM stdin;
    public          postgres    false    210   �                 0    16932 
   insuarence 
   TABLE DATA           :   COPY public.insuarence (number, v_from, v_to) FROM stdin;
    public          postgres    false    212   �                 0    16977    purchase 
   TABLE DATA           }   COPY public.purchase (id, p_from, number, rp, r_price, br, b_price, bh, bh_price, peacock, p_price, discription) FROM stdin;
    public          postgres    false    215                     0    16943    renew 
   TABLE DATA           5   COPY public.renew (number, v_from, v_to) FROM stdin;
    public          postgres    false    213   �                 0    16917    repair 
   TABLE DATA           C   COPY public.repair (number, date, discription, amount) FROM stdin;
    public          postgres    false    211                     0    16982    sell 
   TABLE DATA           w   COPY public.sell (id, s_to, number, rp, r_price, br, b_price, bh, bh_price, peacock, p_price, discription) FROM stdin;
    public          postgres    false    216                     0    16948    service 
   TABLE DATA           >   COPY public.service (number, date, present, next) FROM stdin;
    public          postgres    false    214   !                 0    16988    supplier 
   TABLE DATA           J   COPY public.supplier (id, name, tp, whatsapp, address, email) FROM stdin;
    public          postgres    false    217   z!       �           2606    17001    customer customer_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.customer
    ADD CONSTRAINT customer_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.customer DROP CONSTRAINT customer_pkey;
       public            postgres    false    218            �           2606    16906    employee employee_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.employee
    ADD CONSTRAINT employee_pkey PRIMARY KEY (code);
 @   ALTER TABLE ONLY public.employee DROP CONSTRAINT employee_pkey;
       public            postgres    false    209            �           2606    16994    supplier supplier_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.supplier
    ADD CONSTRAINT supplier_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.supplier DROP CONSTRAINT supplier_pkey;
       public            postgres    false    217                  x������ � �         ?   x��055633�,ͪ�.��407426�415�,��(����%��ٕ@F6P������ !4�         r   x���1� D�z9�0��.6�H,�����x ��7�W����,�V�%��`O{�E ��J��;�crֹ���0luh)��{�ьL:�kG4����U��[Zc�G_�'         )   x��q�5622�4202�7��74 2MA��g���qqq U�3�         5   x���65�PH��"KS#�ԢԢ���������tN qe�����=... so��         �   x�32022400�LKJ�$������������ ��q�5656�473�0�46�067�� ����AD���	$�Ks�s3s�3�+u����D.�A`��H��p�r�-7�wP����� 0:G4         J   x���65��45�,�KIM��KM�4254�ʆ�����c-�Ϊ,�.�$,d #�B��, U��>F��� ��N         b   x��q�5600�4202�74 "�Ԣ��tY��5�7)��q�k0D�����������������������m#U_i^JjZf^j
������ ��mU         ~   x�3202240��LKJ�$������������ ��q�5656�473�0�46�067�� ʀ̅�I0Hf��&%*$�f�$*�%f$f'V�(d�\F��{�F����F#��=... �3@�         ]   x�U��� ��3�2��īѓ���C1s�����c��)Tb �)i�t�TV��}V�TD�����@�.N�Z��f��!Tu/"� � �         A   x��055�0�,ͪ�.�洰̷��,��(����%��ٕ@F6P��055&])�c���� S 3�     
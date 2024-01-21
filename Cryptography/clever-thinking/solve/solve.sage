def SmartAttack(P,Q,p):
    E = P.curve()
    Eqp = EllipticCurve(Qp(p, 2), [ ZZ(t) + randint(0,p)*p for t in E.a_invariants() ])

    P_Qps = Eqp.lift_x(ZZ(P.xy()[0]), all=True)
    for P_Qp in P_Qps:
        if GF(p)(P_Qp.xy()[1]) == P.xy()[1]:
            break

    Q_Qps = Eqp.lift_x(ZZ(Q.xy()[0]), all=True)
    for Q_Qp in Q_Qps:
        if GF(p)(Q_Qp.xy()[1]) == Q.xy()[1]:
            break

    p_times_P = p*P_Qp
    p_times_Q = p*Q_Qp

    x_P,y_P = p_times_P.xy()
    x_Q,y_Q = p_times_Q.xy()

    phi_P = -(x_P/y_P)
    phi_Q = -(x_Q/y_Q)
    k = phi_Q/phi_P
    return ZZ(k)


m = 235322474717419
F = GF(m)
C = EllipticCurve(F, [0, 8856682])

public_base = C(185328074730054, 87402695517612)

Q1 = C(184640716867876, 45877854358580) # my public key
Q2 = C(157967230203538, 128158547239620) # your public key


my_private_key = SmartAttack(public_base, Q1, 235322474717419) # 127556068971283
your_private_key = SmartAttack(public_base, Q2, 235322474717419) # 76918112227635

secret = my_private_key*Q2 # or your_private_key*Q1

